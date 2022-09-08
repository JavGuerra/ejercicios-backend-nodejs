const client = require('../modules/connection');

const getAllProducts = async () => {
    try {
        const list = await client.query('SELECT * FROM products');
        // console.log('Products: ', list.rows);
        return list.rows;
    } catch (err) {
        console.error(err);
    }
}

module.exports = { getAllProducts };
