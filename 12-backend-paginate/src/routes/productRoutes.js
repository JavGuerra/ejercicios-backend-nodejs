const express = require('express');
const router = express.Router();
const getFilteredProducts = require('../controllers/productControllers');

router.get('/', getFilteredProducts);

module.exports = router;