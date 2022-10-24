const { model, Schema } = require('mongoose');

const productSchema = new Schema(
    {
        name: String,
        manufacturer: { 
            ref: { type: Schema.Types.ObjectId, ref: 'Manufacturer'},
            cif: String
        },
        color: String,
        price: Number
    },
    { versionKey: false }
);

const Product = model('Product', productSchema);

module.exports = Product;