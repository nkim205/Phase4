const express = require('express');
const router = express.Router();
const { completionAppointment } = require('../controllers/completeAppointment');

router.post('/', completionAppointment);

module.exports = router;