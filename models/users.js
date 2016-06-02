'use strict';

// get the modules
const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      passportLocalMongoose = require('passport-local-mongoose');

// create the schema
const userSchema = new Schema({
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

userSchema.plugin(passportLocalMongoose);

// create the model
const User = mongoose.model('User', userSchema);

// export the module
module.exports = User;
