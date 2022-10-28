const { model, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const productSchema = new Schema(
    {
        name: String,
        manufacturer: { 
            ref: { type: Schema.Types.ObjectId, ref: 'Manufacturer'},
            name: String
        },
        color: String,
        price: Number
    },
    { versionKey: false }
);

productSchema.plugin(mongoosePaginate);


const Product = model('Product', productSchema);

module.exports = Product;