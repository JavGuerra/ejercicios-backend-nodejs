const { response } = require('../modules/utils');
const searchServices = require('../services/searchServices');

const getProducts = async (req, res) => {
    const products = await searchServices.getProducts(req.params.marca);
    res.json(response(products));
};

module.exports = getProducts;