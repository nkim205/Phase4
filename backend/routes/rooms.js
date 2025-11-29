const express = require('express');
const router = express.Router();
const { getRoomWiseView, assignRoomToPatient } = require('../controllers/roomControllers');

router.get('/', getRoomWiseView);
router.post('/assign', assignRoomToPatient);

module.exports = router;