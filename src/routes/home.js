const express = require('express');
const router = express.Router();

const control = require('./control');

router.get('/', control.page.home);

router.post('/', control.process.check);

module.exports = router;