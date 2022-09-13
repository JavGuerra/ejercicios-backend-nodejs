const { getMysqlDbList } = require('../modules/utils');

const getAllManufacters = () => {
    const request = 'SELECT * FROM manufacters';
    return getMysqlDbList(request);
}

const getManufacter = (marca) => {
    const request = `SELECT * FROM manufacters WHERE cif='${marca}'`;
    return getMysqlDbList(request);
}

module.exports = { getAllManufacters, getManufacter };