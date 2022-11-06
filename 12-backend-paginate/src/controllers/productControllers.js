const searchServices = require('../services/productServices');

const getFilteredProducts = async (req, res) => {
  let { model, color, price, brand, page = 1, limit = 5, sortprice = 1 } = req.query;
  if (model) model = model.trim().toUpperCase();
  if (color) color = color.trim().toLowerCase();
  if (price) price = price.trim();
  if (brand) brand = brand.trim().toUpperCase();
  if (isNaN(page)  || page  < 1) page  = 1;
  if (isNaN(limit) || limit < 1) limit = 5;
  if (sortprice !== '-1') sortprice = 1;

  const filter = {};
  if (model) filter.name  = { $regex: `.*${model}.*` };
  if (color) filter.color = { $regex: `.*${color}.*`  };
  if (price) filter.price = { $lte: price };
  if (brand) filter["manufacturer.name"] = { $regex: `.*${brand}.*` };

  const sort = { price: sortprice };
  const populate = { path: 'manufacturer.ref', select: '-_id cif address' };
  const options  = { sort, populate, page, limit };

  result = await searchServices.getFilteredProducts(filter, options);
  response_code = (result.docs.length) ? 0 : 1;

  res.json({response_code, result});
};

module.exports = getFilteredProducts;