const { getDbList } = require('../modules/utils');

const getAllManufacters = () => {
    const request = 'SELECT * FROM manufacters';
    return getDbList(request);
}

const getManufacter = (marca) => {
    const request = `SELECT * FROM manufacters WHERE cif='${marca}'`;
    return getDbList(request);
}

module.exports = { getAllManufacters, getManufacter };