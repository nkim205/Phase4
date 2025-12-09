const express = require('express');
const router = express.Router();
const { assignOrderToPatient } = require('../controllers/placeOrder');

router.post('/', assignOrderToPatient);

module.exports = router;