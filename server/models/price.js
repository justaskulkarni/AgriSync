const mongoose = require('mongoose')
const Schema = mongoose.Schema

const priceSchema = new Schema({
    name : {type : String},
    price : {type : String},
})

module.exports = mongoose.model('price', priceSchema)