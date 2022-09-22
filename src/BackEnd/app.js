const express = require('express');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');

const cardataRoutes = require('./src/routes/cardata');

const cardataSchema = new mongoose.Schema({
    model: String,
    brand: String,
    year: Number,
    price: Number
})

app.use(cors());
app.use('/', cardataRoutes)

mongoose.connect(`mongodb+srv://mmedicci:Tortuga11@cluster0.lai1f5l.mongodb.net/cardataDB`).then(() => {
    app.listen(4000, () => console.log('http://localhost:4000/cardata'))
})

