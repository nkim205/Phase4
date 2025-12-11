const express = require('express');
const router = express.Router();
const { patientRemoval } = require('../controllers/removePatient');

router.post('/', patientRemoval);

module.exports = router;