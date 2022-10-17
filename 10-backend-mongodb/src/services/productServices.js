const Product = require('../schemas/Product-schema');

const getAllProducts = async () => {
    return await Product.find({}).exec();
}

const getProductsByManufacturers = async (marca) => {
    return await Product.find({"manufacter": marca}).exec();
}

module.exports = { getAllProducts, getProductsByManufacturers };