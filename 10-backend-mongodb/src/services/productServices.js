const productModel = require('../schemas/Product-schema');

const getAllProducts = async () => {
    return await productModel.find({}).exec();
}

const getProductsByManufacturers = async (marca) => {
    return await productModel.find({"manufacter": marca}).exec();
}

module.exports = { getAllProducts, getProductsByManufacturers };