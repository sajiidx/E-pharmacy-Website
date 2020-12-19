const express = require('express')
const router = express.Router()

const AuthDeliveryboy = require('../controllers/AuthDeliveryboy')

router.get('/registration', function(req, res, next){
    res.render('deliveryboy_reg.ejs')
})
router.get('/', function(req, res, next){
    res.render('deliveryboy.ejs')
})
router.get('/login', function(req, res, next){
    res.render('deliveryboy_login.ejs')
})
router.post('/registration', AuthDeliveryboy.register)
router.post('/login', AuthDeliveryboy.login)

module.exports = router