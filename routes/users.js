'use strict';

const express = require('express'),
      passport = require('passport'),
      User = require('../models/users.js'),
      Verify = require('./verify'),
      router = express.Router();

// Will add users
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/register', (req, res) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      return res.status(500).json({err: err});
    }

    passport.authenticate('local')(req, res, () => {
      return res.status(200).json({status: 'Registration Successful'});
    });
  });
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err) }

    if (!user) {
      return res.status(401).json({err: info});
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }

      console.log('User in users: ', user);

      let token = Verify.getToken(user);

      res.status(200).json({
        status: 'Login Successful!',
        success: true,
        token: token
      });
    });
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});
module.exports = router;
