const { Router } = require('express')
const feedback = require('./feedback')
const User = require('../modules/User')
const Static = require('../modules/Static')

const router = Router()

router.post('/v1/feedback', feedback.getForm)

router.post('/v1/login', User.login)
router.post('/v1/login/verify', User.checkAuthorization)

router.put('/v1/static', Static.set)
router.get('/v1/static', Static.get)

module.exports = router

