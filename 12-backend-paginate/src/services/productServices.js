const Product = require('../schemas/Product-schema');

const getAllProducts = async (page, limit) => {
    return await Product.paginate({}, { page, limit });
}

module.exports = { getAllProducts };