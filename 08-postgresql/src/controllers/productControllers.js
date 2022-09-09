const { response } = require('../modules/utils');
const productServices = require('../services/productServices');

const getAllProducts = async (req, res) => {
    const allProducts = await productServices.getAllProducts();
    res.json(response(allProducts));
};

const getProductsByManufacters = async (req, res) => {
    const productsByManufacters = 
        await productServices.getProductsByManufacters(req.params.marca);
    res.json(response(productsByManufacters));
};

module.exports = { getAllProducts, getProductsByManufacters };