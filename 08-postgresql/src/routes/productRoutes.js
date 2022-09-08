const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.get('/', productControllers.getAllProducts);
router.get('/:marca', productControllers.getProductsByManufacters);

module.exports = router;