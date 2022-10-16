const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.get('/', productControllers.getAllProducts);
router.get('/:marca', productControllers.getProductsByManufacturers);

module.exports = router;