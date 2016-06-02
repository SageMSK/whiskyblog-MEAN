'use strict';

const User = require('../models/users'),
      jwt = require('jsonwebtoken'), // used to create, sign, and verify token
      config = require('../config.js');

exports.getToken = (user) => {
  return jwt.sign(user, config.secretKey, {
    expiresIn: 3000
  });
};

exports.verifyOrdinaryUser = (req, res, next) => {
  // check header or url parameters or post parameters for token
  let token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.secretKey, (err, decoded) => {
      if (err) {
        let err = new Error('You are not authenticated!');
        err.status = 401;
        return next(err);
      }
      else {
        // if everything is good, save to 
        req.decoded = decoded;
        next();
      }
    });
  }
  else {
    // if there is no token
    // return an error
    let err = new Error('No token provided!');
    err.status = 403;
    return next(err);
  }
};