const express = require('express');
const router = express.Router();
const { getAllManufacters, getManufacter }
    = require('../controllers/manufacterControllers');

router.get('/', getAllManufacters);
router.get('/:marca', getManufacter);

module.exports = router;