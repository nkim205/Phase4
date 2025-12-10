const express = require('express');
const router = express.Router();
const { assignNurse } = require('../controllers/addNurseToRoom');

router.post('/', assignNurse);

module.exports = router;