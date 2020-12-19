var mongoose = require('mongoose');
var CartSchema = new mongoose.Schema({
    oid:{
        type: String,
        require: true,
        unique: true,
    },
    product:[
        {
            pid:{
                type: String,
            },
            quantity:{
                type: Number,
            }
        }
    ]
    
});
var Cart = mongoose.model('Cart' , CartSchema);
module.exports = Cart;