const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PACSchema = new Schema({
    email : {type : String},
    password : {type : String},
    name : {type : String},
    state : {type:String},
    district : {type:String},
})

module.exports = mongoose.model('PAC', PACSchema)