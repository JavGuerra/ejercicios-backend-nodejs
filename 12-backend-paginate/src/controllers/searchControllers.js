const searchServices = require('../services/searchServices');

const getFilteredProducts = async (req, res) => {
  let { modelo, color, precio, marca, page = 1, limit = 5 } = req.query;
  if (modelo) modelo = modelo.trim().toUpperCase();
  if (color ) color  = color.trim().toLowerCase();
  if (precio) precio = precio.trim();
  if (marca ) marca  = marca.trim().toUpperCase();
  page  = page  ? page  : 1;
  limit = limit ? limit : 5;
  if (isNaN(page)  || page  < 1) page  = 1;
  if (isNaN(limit) || limit < 1) limit = 5;

  let response_code = (modelo || color || precio || marca) ? 0 : 2;
  let result = '';

  if (!response_code) {
    result = await searchServices.getFilteredProducts(modelo, color, precio, marca, page, limit);
    response_code = (result.docs.length) ? 0 : 1;
  }

  res.json({response_code, result});
};

module.exports = getFilteredProducts;