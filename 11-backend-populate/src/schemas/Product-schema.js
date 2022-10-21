const { model, Schema } = require('mongoose');

const productSchema = new Schema(
    {
        name: String,
        manufacturer: {
            _id: {
                type: Schema.Types.ObjectId,
                ref: 'Manufacturer'
            }
        },
        color: String,
        price: Number
    },
    { versionKey: false }
);

const Product = model('Product', productSchema);

module.exports = Product;