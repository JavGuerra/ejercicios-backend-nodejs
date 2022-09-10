const client = require('../modules/connection');

const getProducts = async (params) => {
    try {
        const request = 'SELECT * FROM products' + params + ';';
        console.log(request);
        const list = await client.query(request);
        return list.rows;
    } catch (err) {
        console.error(err);
    }
}

module.exports = { getProducts };