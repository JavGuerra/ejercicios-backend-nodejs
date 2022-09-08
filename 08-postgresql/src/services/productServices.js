const client = require('../modules/connection');

const getAllProducts = async () => {
    try {
        const request = 'SELECT * FROM products'
        const list = await client.query(request);
        return list.rows;
    } catch (err) {
        console.error(err);
    }
}

const getProductsByManufacters = async (marca) => {
    try {
        const request = `SELECT * FROM products WHERE manufacter_cif='${marca}'`;
        const list = await client.query(request);
        return list.rows;
    } catch (err) {
        console.error(err);
    }
}

module.exports = { 
    getAllProducts,
    getProductsByManufacters
};
