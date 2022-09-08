const client = require('../modules/connection');

const getAllManufacters = async () => {
    try {
        const request = 'SELECT * FROM manufacters';
        const list = await client.query(request);
        return list.rows;
    } catch (err) {
        console.error(err);
    }
}

const getManufacter = async (marca) => {
    try {
        const request = `SELECT * FROM manufacters WHERE cif='${marca}'`;
        const list = await client.query(request);
        return list.rows;
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getAllManufacters,
    getManufacter
};