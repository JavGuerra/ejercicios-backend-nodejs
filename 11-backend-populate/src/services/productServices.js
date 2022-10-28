const Product = require('../schemas/Product-schema');

const getAllProducts = async () => {
    return await Product.find( {}, {_id: 0} )
        .populate( 'manufacturer.ref', '-_id cif address' ).exec();
}

const getProductsByManufacturers = async (marca) => {
    return await Product.find( {"manufacturer.name": marca}, {_id: 0} )
        .populate( 'manufacturer.ref', '-_id cif address' ).exec();
}

module.exports = { getAllProducts, getProductsByManufacturers };