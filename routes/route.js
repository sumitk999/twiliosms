const router = require('express').Router()
const {userReg,getUser} = require('../userModule/user.controller')
const sendmail = require('../services/email.service')
const {sendsms} = require('../services/sms.service')


router.post('/user/reg',userReg)
router.get('/user/get',getUser)
router.get('/mail',sendmail.main)
router.get('/sms',sendsms)

module.exports = router