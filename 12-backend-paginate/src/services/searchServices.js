const Product = require('../schemas/Product-schema');

const getFilteredProducts = async (modelo, color, precio, marca, page, limit) => {

    const filter = {};
    if (modelo) filter.name  = { $regex: `.*${modelo}.*` };
    if (color ) filter.color = { $regex: `.*${color}.*`  };
    if (precio) filter.price = { $lte: precio };
    if (marca ) filter["manufacturer.name"] = { $regex: `.*${marca}.*` };

    const populate = {path: 'manufacturer.ref', select: '-_id cif address'};

    return await Product.paginate(filter, { page, limit, populate });

    // return await Product.paginate({}, { page, sort: { ['price']: 1 }, limit });
}

module.exports = { getFilteredProducts };