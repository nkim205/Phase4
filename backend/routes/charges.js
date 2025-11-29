const express = require('express');
const router = express.Router();
const { getOutstandingCharges } = require('../controllers/outstandingCharges');

router.get('/', getOutstandingCharges);

module.exports = router;