const express  = require('express');
const router   = express.Router();
const products = require('../products');

router.get('/:brand/:color/:price', (req, res) => {
    let name  = req.params.brand.toUpperCase();
    let color = req.params.color.toLowerCase();
    let price = req.params.price;

    let result = products.filter (e => {
        return (e.name.includes(name)) &&
        (e.color.includes(color)) &&
        (e.price < price);
    });

    if (result.length) {
        res.json({result});
    } else {
        console.log('Errorcillo');
        res.end();
    }

})

module.exports = router;