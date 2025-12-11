const express = require('express');
const router = express.Router();
const { manageDept } = require('../controllers/manageDepartment');

router.post('/', manageDept);

module.exports = router;