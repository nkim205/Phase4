const express = require('express');
const router = express.Router();
const { addPatientToTable } = require('../controllers/addPatient');

router.post('/', addPatientToTable);

module.exports = router;