const feedback = require('./feedback')
const { Router } = require('express')

const router = Router()

router.post('/v1/feedback', feedback.getForm)

module.exports = router

