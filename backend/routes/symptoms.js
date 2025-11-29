const express = require('express');
const router = express.Router();
const { getSymptomsOverview } = require('../controllers/appointmentControllers');

router.get('/', getSymptomsOverview);

module.exports = router;