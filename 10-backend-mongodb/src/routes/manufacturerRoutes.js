const express = require('express');
const router = express.Router();
const manufacturerControllers = require('../controllers/manufacturerControllers');

router.get('/', manufacturerControllers.getAllManufacturers);
router.get('/:marca', manufacturerControllers.getManufacturer);

module.exports = router;