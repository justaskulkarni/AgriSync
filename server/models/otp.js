const mongoose = require('mongoose')
const Schema = mongoose.Schema

const otpSchema = new Schema({
    email : {type : String},
    otp : {type : Number},
})

module.exports = mongoose.model('Otp', otpSchema)