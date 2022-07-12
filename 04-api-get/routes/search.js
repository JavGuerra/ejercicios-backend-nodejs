const express = require('express');
const router = express.Router();
const products = require('../products');

// query strings
router.get('/', (req, res) => {
    const { brand, color, price } = req.query;

    const result = (brand || color || price)
        ? products.filter(element =>
            (brand ? element.name.includes(brand.toUpperCase()) : true) &&
            (color ? element.color.includes(color.toLowerCase()) : true) &&
            (price ? element.price < price : true))
        : [];

    res.json(result);
});

// query params
router.get('/:brand', (req, res) => {
    const brand = req.params.brand.toUpperCase();

    const result = products.filter(element => element.name.includes(brand));

    res.json(result);
});

router.get('/:brand/:color', (req, res) => {
    const { brand, color } = req.params;

    const result = products.filter(element =>
        (brand ? element.name.includes(brand.toUpperCase()) : true) &&
        (color ? element.color.includes(color.toLowerCase()) : true));

    res.json(result);
});

router.get('/:brand/:color/:price', (req, res) => {
    const { brand, color, price } = req.params;

    const result = products.filter(element =>
        (brand ? element.name.includes(brand.toUpperCase()) : true) &&
        (color ? element.color.includes(color.toLowerCase()) : true) &&
        (price ? element.price < price : true));

    res.json(result);
});

module.exports = router;