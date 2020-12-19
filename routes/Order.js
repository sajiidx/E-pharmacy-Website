const express = require('express')
const router = express.Router()
const OrderController = require('../controllers/order')
//const upload = require('../middleware/upload')

router.get('/',OrderController.index)
router.post('/show',OrderController.show)
router.post('/store', OrderController.store)
router.post('/update',OrderController.update)
router.post('/delete',OrderController.destory)

module.exports = router