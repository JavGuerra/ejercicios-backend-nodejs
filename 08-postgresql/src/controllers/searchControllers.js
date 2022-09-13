const { response } = require('../modules/utils');
const searchServices = require('../services/searchServices');

const getProducts = async (req, res) => {
  const { modelo, color, precio, marca } = req.query;
  const code = (modelo || color || precio || marca) ? 0 : 2;
  let products = '';
  if (!code) {
    products = await searchServices.getProducts(modelo, color, precio, marca);
  }
  res.json(response(code, products));
};

module.exports = getProducts;