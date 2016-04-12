'use strict';

const express = require('express');
const router = express.Router();

// Will add users
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
