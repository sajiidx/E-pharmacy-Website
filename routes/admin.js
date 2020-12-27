const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', async (req, res) => {
    const order = await axios({
        method: 'get',
        url: 'http://localhost:3000/order'
    });
    const customers = await axios({
        method: 'get',
        url: 'http://localhost:3000/customer'
    });
    const medicalstore = await axios({
        method: 'get',
        url: 'http://localhost:3000/medicalstore'
    });
    const deliveryboy = await axios({
        method: 'get',
        url: 'http://localhost:3000/deliveryboy'
    });
    res.render('admin.ejs')
})

module.exports = router