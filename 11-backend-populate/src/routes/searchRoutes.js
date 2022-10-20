const express = require('express');
const router = express.Router();
const getFilteredProducts = require('../controllers/searchControllers');

router.get('/', getFilteredProducts);

module.exports = router;