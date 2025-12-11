const express = require('express');
const router = express.Router();
const { assignRoomToPatient } = require('../controllers/roomControllers');

router.post('/', assignRoomToPatient);

module.exports = router;