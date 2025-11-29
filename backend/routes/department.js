const express = require('express');
const router = express.Router();
const { getDepartmentOverview } = require('../controllers/department');

router.get('/', getDepartmentOverview);

module.exports = router;