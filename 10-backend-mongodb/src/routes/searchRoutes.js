const express = require('express');
const router = express.Router();
const getProducts = require('../controllers/searchControllers');

router.get('/', getProducts);

module.exports = router;