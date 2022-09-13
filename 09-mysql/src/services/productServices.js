const { getDbList } = require('../modules/utils');

const getAllProducts = () => {
    const request = 'SELECT * FROM products';
    return getDbList(request);
}

const getProductsByManufacters = (marca) => {
    const request = `SELECT * FROM products WHERE manufacter_cif='${marca}'`;
    return getDbList(request);
}

module.exports = { getAllProducts, getProductsByManufacters };