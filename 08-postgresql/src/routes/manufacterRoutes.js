const express = require('express');
const router = express.Router();
const manufacterControllers = require('../controllers/manufacterControllers');

router.get('/', manufacterControllers.getAllManufacters);
router.get('/:marca', manufacterControllers.getManufacter);

module.exports = router;