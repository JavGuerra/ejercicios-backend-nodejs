const Product = require('../schemas/Product-schema');

const getAllProducts = async (filter, options) => {
    return await Product.paginate(filter, options);
}

module.exports = { getAllProducts };