const {model, Schema} = require('mongoose');

const productSchema = new Schema({
    _id: String,
    name: String,
    manufacter: String,
    price: Number,
    color: String
});

const productModel = model('products', productSchema);

module.exports = productModel;