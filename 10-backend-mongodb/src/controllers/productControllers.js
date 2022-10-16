const productServices = require('../services/productServices');

const getAllProducts = async (req, res) => {
    const result = await productServices.getAllProducts();
    const response_code = (result.length) ? 0 : 1;
    res.json({response_code, result});
};

const getProductsByManufacturers = async (req, res) => {
    const marca = req.params.marca.trim().toUpperCase();
    let response_code = (marca) ? 0 : 2;
    let result = '';
    if (!response_code) {
        result = await productServices.getProductsByManufacturers(marca);
        response_code = (result.length) ? 0 : 1;
    }
    res.json({response_code, result});
};

module.exports = { getAllProducts, getProductsByManufacturers };