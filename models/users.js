'use strict';

// get the modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

// create the model
const User = mongoose.model('User', userSchema);

// export the module
module.exports = User;
