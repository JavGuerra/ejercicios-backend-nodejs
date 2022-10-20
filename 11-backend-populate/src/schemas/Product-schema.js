const { model, Schema } = require('mongoose');

const productSchema = new Schema(
    {
        _id: String,
        name: String,
        manufacturer: String,
        // manufacturer: {
        //     _id: {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Manufacturer'
        //     },
        //     name: String
        // },
        price: Number,
        color: String
    },
    { versionKey: false }
);

const Product = model('Product', productSchema);

module.exports = Product;