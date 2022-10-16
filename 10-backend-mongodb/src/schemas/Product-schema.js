const {model, Schema} = require('mongoose');

const productSchema = new Schema({
    _id: String,
    name: String,
    manufacter: String,
    // manufacter: [{_id: { type: Schema.Types.ObjectId, ref: 'manufacters' }}],
    price: Number,
    color: String
});

const productModel = model('products', productSchema);

module.exports = productModel;