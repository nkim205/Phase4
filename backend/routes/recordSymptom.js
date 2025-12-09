const express = require('express');
const router = express.Router();
const { addSymptomstoPatient } = require('../controllers/recordSymptoms');

router.post('/', addSymptomstoPatient);

module.exports = router;