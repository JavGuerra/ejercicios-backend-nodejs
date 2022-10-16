const productModel = require('../schemas/Product-schema');

const getFilteredProducts = async (modelo, color, precio, marca) => {
    let query = {};
    if (modelo) query.name = { $regex: `.*${modelo}.*` };
    if (marca ) query.manufacter = { $regex: `.*${marca}.*` };
    if (precio) query.price = precio;
    if (color ) query.color = { $regex: `.*${color}.*` };
    
    return await productModel.find(query).exec();
    // return await productModel.find(query).populate('manufacter._id').exec();
}

module.exports = { getFilteredProducts };