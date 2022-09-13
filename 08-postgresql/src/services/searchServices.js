const { getDbList } = require('../modules/utils');

const getProducts = (params) => {
    const request = 'SELECT * FROM products' + params + ';';
    console.log(request);
    return getDbList(request);
}

module.exports = { getProducts };