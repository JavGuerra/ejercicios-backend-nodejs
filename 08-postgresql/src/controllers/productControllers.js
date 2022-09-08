const { response } = require('../modules/utils');
const productServices = require('../services/productServices');

const getAllProducts = async (req, res) => {
    const allProducts = await productServices.getAllProducts();
    res.send(response(allProducts));
};

const getProductsByManufacters = async (req, res) => {
    const productsByManufacters = 
        await productServices.getProductsByManufacters(req.params.marca);
    res.send(response(productsByManufacters));
};

module.exports = {
    getAllProducts,
    getProductsByManufacters
};