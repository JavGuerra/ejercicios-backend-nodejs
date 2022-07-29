const express = require('express');
const router = express.Router();
const productModel = require('../schemas/Product-schema');

router.get('/', async (req, res, next) => {
    try {
        const docs = await productModel.find({}).exec();
        console.log('Productos: ', docs);
        res.json(docs);
    } catch (err) { 
        next(err)
    }
})



// response_code:
// 0: OK: Hay datos que devolver
// 1: Sin resultados encontrados
// 2: Sin alguno o todos los parámetros

// /**
//  * Return the response_code and result for a request
//  * @param {Interger} response_code response error code
//  * @param {String} brand of product
//  * @param {String} color of product
//  * @param {Number} price of product
//  * @returns json
//  */
// function response(response_code, brand = undefined, color = undefined, price = undefined) {
//     const result = (!response_code)
//         ? products.filter(element =>
//             ( !brand || element.name.includes(brand.toUpperCase()) ) &&
//             ( !color || element.color.includes(color.toLowerCase()) ) &&
//             ( !price || element.price < price ) )
//         : [];
//     if (!response_code) response_code = (result.length) ? 0 : 1;
//     return {response_code, result};
// }

// // query strings

// router.get('/', (req, res) => {
//     console.log('query strings');
//     const { brand, color, price } = req.query;
//     const response_code = (brand || color || price) ? 0 : 2;
//     res.json(response(response_code, brand, color, price));
// });

// // query params

// router.get('/:brand', (req, res) => {
//     console.log('1 query param');
//     const brand = req.params.brand;
//     const response_code = (brand) ? 0 : 2;
//     res.json(response(response_code, brand));
// });

// router.get('/:brand/:color', (req, res) => {
//     console.log('2 query params');
//     const { brand, color } = req.params;
//     const response_code = (brand && color) ? 0 : 2;
//     res.json(response(response_code, brand, color));
// });

// router.get('/:brand/:color/:price', (req, res) => {
//     console.log('3 query params');
//     const { brand, color, price } = req.params;
//     const response_code = (brand && color && price) ? 0 : 2;
//     res.json(response(response_code, brand, color, price));
// });

// router.use((req, res) => res.json({ response_code: 2, result: [] }));

module.exports = router;