const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vegetableSchema = new Schema({
    name : {type : String},
    price : {type : String},
    date: {
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model('veggies', vegetableSchema)