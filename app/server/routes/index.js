const { Router } = require('express')
const feedback = require('./feedback')
const User = require('./User')

const router = Router()

router.post('/v1/feedback', feedback.getForm)

router.post('/v1/login', User.login)
router.post('/v1/login/verify', User.checkAuthorization)

module.exports = router

