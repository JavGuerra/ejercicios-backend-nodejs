const client = require('../modules/connection');

const getAllManufacters = async () => {
    try {
        const list = await client.query('SELECT * FROM manufacters');
        // console.log('Manufacters: ', list.rows);
        return list.rows;
    } catch (err) {
        console.error(err);
    }
}

module.exports = { getAllManufacters };