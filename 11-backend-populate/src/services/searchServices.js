const Product = require('../schemas/Product-schema');

const getFilteredProducts = async (modelo, color, precio, marca) => {
    const filter = {};
    if (modelo) filter.name  = { $regex: `.*${modelo}.*` };
    if (color ) filter.color = { $regex: `.*${color}.*`  };
    if (precio) filter.price = { $lte: precio };
    if (marca ) filter.manufacturer = { $regex: `.*${marca}.*` };
    
    return await Product.find(filter).populate('manufacturer._id').exec();
}

module.exports = { getFilteredProducts };