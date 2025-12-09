const express = require('express');
const router = express.Router();
const { addPatientToAppointment } = require('../controllers/bookAppointment');

router.post('/', addPatientToAppointment);

module.exports = router;