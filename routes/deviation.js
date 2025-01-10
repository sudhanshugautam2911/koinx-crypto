const express = require('express');
const { getPriceDeviation } = require('../controllers/deviationController');
const router = express.Router();

router.get('/', getPriceDeviation);

module.exports = router;
