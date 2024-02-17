const mongoose = require('mongoose');

const Dish = mongoose.model('dishes', { 
    id: Number,
    name: String,
    img: String,
    category: String,
    price: Number,
    quantity: Number
   });

module.exports = { Dish };