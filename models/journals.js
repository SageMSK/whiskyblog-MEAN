'use strict';

// get the modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the schema
const journalSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  nose: {
    type: String,
    required: true
  },
  taste: {
    type: String,
    required: true
  },
  finish: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}, {
  timestamps: true
});

// create the model
const Journals = mongoose.model('Journal', journalSchema);

// export the module
module.exports = Journals;
