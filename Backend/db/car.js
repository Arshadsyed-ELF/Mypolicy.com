const mongoose = require('mongoose');

const carschema = new mongoose.Schema({
    provider:String,
    idv:String,
    price:String,
    perks:String,
    details:String,
    claim:String,

})

module.exports =mongoose.model('car',carschema)

