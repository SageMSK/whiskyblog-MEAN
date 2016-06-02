'use strict';

const express = require('express'),
      passport = require('passport'),
      Account = require('../models/users.js'),
      userRouter = express.Router();

// Will add users
userRouter.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = userRouter;
