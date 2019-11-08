const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const apiRoutes = require('./routes')
const app = express()
let mongoose = require('mongoose')
require('dotenv').config()
const logger = require('morgan')
const isDev = process.env.NODE_ENV !== 'production'

let options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
}

mongoose.connect(process.env.MONGO_LOCAL_CONN_URL, options)
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = isDev

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(bodyParser.text())
  app.use(bodyParser.json({ type: 'application/json' }))

  app.use('/api', apiRoutes)

  // Give nuxt middleware to express
  app.use(nuxt.render)



  if (isDev) {
    app.use(logger('dev'))
  }

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
