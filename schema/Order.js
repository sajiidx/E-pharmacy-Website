var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
    oid:{
        type: Number,
        required: true,
    },
    product:[
        {
            pid:{
                type: String
            },
            quantity:{
                type: Number
            },
            mid:{
                type: String,
                required: true,
            }
        }
    ],
    status:{
        type: String
    }
});
var Order = mongoose.model('Order' , OrderSchema);
module.exports = Order;