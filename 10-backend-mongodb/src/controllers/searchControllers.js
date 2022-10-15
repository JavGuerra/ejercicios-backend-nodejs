const { clean, response } = require('../modules/utils');
const searchServices = require('../services/searchServices');

const getProducts = async (req, res) => {
  let { modelo, color, precio, marca } = req.query;
  if (modelo) modelo = clean(modelo.toUpperCase());
  if (color ) color  = clean(color.toLowerCase());
  if (precio) precio = clean(precio);
  if (marca ) marca  = clean(marca.toUpperCase());

  const code = (modelo || color || precio || marca) ? 0 : 2;
  let products = '';

  if (!code) {
    products = await searchServices.getProducts(modelo, color, precio, marca);
  }
  
  res.json(response(code, products));
};

module.exports = getProducts;