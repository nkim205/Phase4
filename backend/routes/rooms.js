const express = require('express');
const router = express.Router();
const { fetchRoomWiseView, assignRoomToPatient } = require('../controllers/roomControllers');

router.get('/', fetchRoomWiseView);
router.post('/assign', assignRoomToPatient);

module.exports = router;