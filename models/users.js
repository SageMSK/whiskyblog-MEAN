'use strict';

// get the modules
const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      passportLocalMongoose = require('passport-local-mongoose');

// create the schema
const User = new Schema({
  username: String,
  password: String,
  firstname: {
    type: String,
    default: ''
  },
  lastname: {
    type: String,
    default: ''
  },
  admin: {
    type: Boolean,
    default: false
  }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);