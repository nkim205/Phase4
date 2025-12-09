const express = require('express');
const router = express.Router();
const { addFundsToPatient } = require('../controllers/addFunds');

router.post('/', addFundsToPatient);

module.exports = router;