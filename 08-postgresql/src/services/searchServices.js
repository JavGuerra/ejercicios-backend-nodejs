const { getDbList, r } = require('../modules/utils');

const getProducts = (modelo, color, precio, marca) => {
    let params = '';
    params += modelo ? r(params) + `name LIKE '%${modelo.toUpperCase()}%'` : '';
    params += color  ? r(params) + `color LIKE '%${color.toLowerCase()}%'` : '';
    params += precio ? r(params) + `price < ${precio}` : '';
    params += marca  ? r(params) + `manufacter_cif='${marca}'` : '';
    const request = 'SELECT * FROM products' + params + ';';
    console.log(request);
    return getDbList(request);
}

module.exports = { getProducts };