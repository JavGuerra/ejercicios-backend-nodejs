const { response } = require('../modules/utils');
const productService = require('../services/productService');

const getAllProducts = async (req, res) => {
    const allProducts = await productService.getAllProducts();
    res.send(response(allProducts));
};

module.exports = { getAllProducts };