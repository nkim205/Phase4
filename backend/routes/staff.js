const express = require('express');
const router = express.Router();
const { getMedicalStaff } = require('../controllers/medicalstaff');

router.get('/', getMedicalStaff);

module.exports = router;