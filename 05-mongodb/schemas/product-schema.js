const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: String,
    name: String,
    manufacter: String,
    price: Number,
    color: String
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;