const express = require('express');
const router = express.Router();
const {getAllProducts, getProductsByManufacters }
    = require('../controllers/productControllers');

router.get('/', getAllProducts);
router.get('/:marca', getProductsByManufacters); // testing

module.exports = router;