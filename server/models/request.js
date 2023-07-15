const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requestSchema = new Schema({
    name : {type : String},
    quantity : {type : String},
    district : {type : String}
})

module.exports = mongoose.model('Request', requestSchema)