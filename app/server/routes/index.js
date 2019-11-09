const { Router } = require('express')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'static/uploads/')
  },
  filename: (req, file, cb) => {
    const fileParts = file.originalname.split('.')
    const format = fileParts.splice(-1, 1)
    cb(null, fileParts.join('.') + '-' + Date.now() + '.' + format[0])
  }
})

const upload = multer({ storage: storage })

const feedback = require('./feedback')
const User = require('../modules/User')
const Static = require('../modules/Static')
const Post = require('../modules/Post')

const router = Router()

router.post('/v1/feedback', feedback.getForm)

router.post('/v1/login', User.login)
router.post('/v1/login/verify', User.checkAuthorization)

router.put('/v1/static', Static.set)
router.get('/v1/static', Static.get)

router.post('/v1/posts', upload.single('image'), Post.create)
router.put('/v1/posts', upload.single('image'), Post.update)
router.delete('/v1/posts/:id', Post.delete)
router.get('/v1/posts/:id', Post.getOne)
router.get('/v1/posts/', Post.getAll)

module.exports = router

