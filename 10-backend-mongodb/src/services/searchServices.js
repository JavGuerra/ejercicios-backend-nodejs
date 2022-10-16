const productModel = require('../schemas/Product-schema');

const getFilteredProducts = async (modelo, color, precio, marca) => {
    const query = {};
    if (modelo) query.name  = { $regex: `.*${modelo}.*` };
    if (color ) query.color = { $regex: `.*${color}.*` };
    if (precio) query.price = { $lt: precio };
    if (marca ) query.manufacter = { $regex: `.*${marca}.*` };
    
    return await productModel.find(query).exec();
    // return await productModel.find(query).populate('manufacter._id').exec();
}

module.exports = { getFilteredProducts };