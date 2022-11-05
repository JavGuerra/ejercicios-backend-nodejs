const Product = require('../schemas/Product-schema');

const getFilteredProducts = async (filter, options) => {
    return await Product.paginate(filter, options);
}

module.exports = { getFilteredProducts };