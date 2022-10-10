const { response } = require('../modules/utils');
const productServices = require('../services/productServices');

const getAllProducts = async (req, res) => {
    const allProducts = await productServices.getAllProducts();
    res.json(response(0, allProducts));
};

const getProductsByManufacters = async (req, res) => {
    const marca = req.params.marca;
    const code = (marca) ? 0 : 2;
    let productsByManufacters = '';
    if (!code) productsByManufacters = 
        await productServices.getProductsByManufacters(marca);
    res.json(response(code, productsByManufacters));
};

module.exports = { getAllProducts, getProductsByManufacters };