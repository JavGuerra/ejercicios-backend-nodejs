const Product = require('../schemas/Product-schema');

const getFilteredProducts = async (modelo, color, precio, marca) => {
    const filter = {};
    if (modelo) filter.name  = { $regex: `.*${modelo}.*` };
    if (color ) filter.color = { $regex: `.*${color}.*`  };
    if (precio) filter.price = { $lte: precio };
    if (marca ) filter.manufacturer = { "cif": marca }; // TODO Error

    console.log(filter);
    
    let products = await Product.find(filter).populate('manufacturer._id').exec();

    // return marca
    //     ? products.filter(elem => elem.manufacturer.cif === marca)
    //     : products;

    return products;
}

module.exports = { getFilteredProducts };