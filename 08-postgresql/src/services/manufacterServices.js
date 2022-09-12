const { getDbList } = require('../modules/utils');

const getAllManufacters = async () => {
    const request = 'SELECT * FROM manufacters';
    return getDbList(request);
}

const getManufacter = async (marca) => {
    const request = `SELECT * FROM manufacters WHERE cif='${marca}'`;
    return getDbList(request);
}

module.exports = { getAllManufacters, getManufacter };