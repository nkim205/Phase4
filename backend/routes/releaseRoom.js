const express = require('express');
const router = express.Router();
const { roomRelease } = require('../controllers/releaseRoom');

router.post('/', roomRelease);

module.exports = router;