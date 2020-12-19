const { json } = require('body-parser')
const { response } = require('express')
const Order = require('../schema/order')

//Show the list of Orders
const index = (req, res) => {
    Order.find()
    .then(response => {
        res.json({
            data: response
        })
    })
    .catch(error => {
        res.json({
            data: error
        })
    })
}
const getOrders = (req, res) => {
    let OrderID = req.body.mid
    Order.find({mid: OrderID})
    .then(response => {
        res.json({
            data: response
        })
    })
    .catch(error => {
        res.json({
            data: error
        })
    })
}
//show Order using ID
const show = (req, res) => {
    let OrderID = req.body.pid
    Order.findById(OrderID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An Error Occured"
        })
    })
}
//add new Order
const store = (req, res) => {
    let Order = new Order({
        pid: req.body.pid,
        pname: req.body.pname,
        mid: req.session.user.username,
        price: req.body.price,
        quantity: req.body.quantity
    })
    Order.save()
    .then(response => {
        res.json({
            message: 'Order Added Successfully'
        })
    })
    .catch(error => {
        res.json({
            err: error
        })
    })
}
//update an Order
const update = (req, res) => {
    let OrderID = req.body.pid

    let updatedData = {
        pid: req.body.pid,
        pname: req.body.pname,
        price: req.body.price,
        quantity: req.body.quantity
    }

    Order.findByIdAndUpdate(OrderID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Order Updated Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}
//delete an Order
const destory = (req, res) => {
    let OrderID = req.body.pid
    Order.findByIdAndRemove(OrderID)
    .then(() => {
        res.json({
            message: 'Order Deleted Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}
//exporting functions
module.exports = {
    index, show, store, update, destory, getOrders
}