const Product = require('../schemas/Product-schema');

const getFilteredProducts = async (modelo, color, precio, marca) => {

    const filter = {};
    if (modelo) filter.name  = { $regex: `.*${modelo}.*` };
    if (color ) filter.color = { $regex: `.*${color}.*`  };
    if (precio) filter.price = { $lte: precio };
    if (marca ) filter["manufacturer.cif"] = marca;
    
    return await Product.find( filter, {_id: 0} )
        .populate( 'manufacturer.ref', '-_id name address' ).exec();

        
    // return marca
    //     ? products.filter(elem => elem.manufacturer.cif === marca)
    //     : products;
}

module.exports = { getFilteredProducts };