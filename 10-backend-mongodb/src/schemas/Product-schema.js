const {model, Schema} = require('mongoose');

const productSchema = new Schema({
    _id: String,
    name: String,
    manufacter: String,
    // manufacter: [{_id: { type: Schema.Types.ObjectId, ref: 'manufacters' }}],
    price: Number,
    color: String
});

const Product = model('products', productSchema);

module.exports = Product;