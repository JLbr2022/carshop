const mongoose = require('mongoose')

const carsdataSchema = new mongoose.Schema({
    model: String,        
    brand: String,
    year: Number,  
    price: Number,
    image: String   
})

module.exports = mongoose.model('cardata', carsdataSchema)