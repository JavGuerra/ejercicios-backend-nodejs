const { getMysqlDbList } = require('../modules/utils');

const getAllProducts = () => {
    const request = 'SELECT * FROM products';
    return getMysqlDbList(request);
}

const getProductsByManufacters = (marca) => {
    const request = `SELECT * FROM products WHERE manufacter_cif='${marca}'`;
    return getMysqlDbList(request);
}

module.exports = { getAllProducts, getProductsByManufacters };