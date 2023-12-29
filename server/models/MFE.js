const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MFESchema = new Schema({
    email : {type : String},
    password : {type : String},
    name : {type : String},
    state : {type:String},
    district : {type:String},
})

const paymentschema = new mongoose.Schema({
    razorpay_order_id:{
        type:String,
        required:true,
    },
    razorpay_payment_id:{
        type:String,
        required:true,
    },
    razorpay_signature:{
        type:String,
        required:true,
    },
})

module.exports = mongoose.model('MFE', MFESchema)
module.exports = mongoose.model('Payment', paymentschema)