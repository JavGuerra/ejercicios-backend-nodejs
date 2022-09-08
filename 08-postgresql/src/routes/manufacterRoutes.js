const express = require('express');
const router = express.Router();
const manufacterController = require('../controllers/manufacterController');

router.get('/', manufacterController.getAllManufacters);

module.exports = router;