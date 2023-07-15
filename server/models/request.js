const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requestSchema = new Schema({
    name : {type : String},
    quantity : {type : String},
    district : {type : String},
    graded : {
        type : Boolean,
        default : false
    },
    grade :{
        type: Number,
        default : -1
    },
    mfetaken: {
        type: Boolean,
        default: false
    },
    status : {type : String , default: 'NotTaken', enum : ['NotTaken' , 'Taken', 'Returned', 'SentToState']}
})

module.exports = mongoose.model('Request', requestSchema)