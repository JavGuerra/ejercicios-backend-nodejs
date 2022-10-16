const searchServices = require('../services/searchServices');

const getProducts = async (req, res) => {
  let { modelo, color, precio, marca } = req.query;
  if (modelo) modelo = modelo.trim().toUpperCase();
  if (color ) color  = color.trim().toLowerCase();
  if (precio) precio = precio.trim();
  if (marca ) marca  = marca.trim().toUpperCase();

  let response_code = (modelo || color || precio || marca) ? 0 : 2;
  let result = '';

  if (!response_code) {
    result = await searchServices.getProducts(modelo, color, precio, marca);
    response_code = (result.length) ? 0 : 1;
  }

  res.json({response_code, result});
};

module.exports = getProducts;