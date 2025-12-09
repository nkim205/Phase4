const express = require('express');
const router = express.Router();
const { addStaffToDept } = require('../controllers/staffToDept');

router.post('/', addStaffToDept);

module.exports = router;