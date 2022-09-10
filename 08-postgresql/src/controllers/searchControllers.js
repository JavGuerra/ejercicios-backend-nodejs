const { response, r } = require('../modules/utils');
const searchServices = require('../services/searchServices');

const getProducts = async (req, res) => {
  const { modelo, color, precio, marca } = req.query;
  const code = (modelo || color || precio || marca) ? 0 : 2;
  let products = '';

  if (!code) {
    let params = '';
    params += modelo ? r(params) + `name LIKE '%${modelo.toUpperCase()}%'` : '';
    params += color  ? r(params) + `color LIKE '%${color.toLowerCase()}%'` : '';
    params += precio ? r(params) + `price < ${precio}` : '';
    params += marca  ? r(params) + `manufacter_cif='${marca}'` : '';

    products = await searchServices.getProducts(params);
  }

  res.json(response(code, products));
};

module.exports = getProducts;