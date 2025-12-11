const express = require('express');
const router = express.Router();
const { assignDoctor } = require('../controllers/addDoctorToAppointment');

router.post('/', assignDoctor);

module.exports = router;