const express = require('express');
const router = express.Router();
const { staffRemoval } = require('../controllers/removeStaffFromDepartment');

router.post('/', staffRemoval);

module.exports = router;