const client = require('../modules/connection');

const getProducts = async (marca) => {
    try {
        const request = `SELECT * FROM products WHERE manufacter_cif='${marca}'`;
        const list = await client.query(request);
        return list.rows;
    } catch (err) {
        console.error(err);
    }
}

module.exports = getProducts;