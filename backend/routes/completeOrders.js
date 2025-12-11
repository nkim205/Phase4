const express = require('express');
const router = express.Router();
const { orderCompletion } = require('../controllers/completeOrder');

router.post('/', orderCompletion);

module.exports = router;