const Product = require('../schemas/Product-schema');

const populate = {path: 'manufacturer.ref', select: '-_id cif address'};

const getAllProducts = async (page, limit) => {
    return await Product.paginate({}, { page, limit, populate });
}

module.exports = { getAllProducts };