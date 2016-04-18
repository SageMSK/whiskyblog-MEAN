'use strict';

// get the modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the schema
const reviewSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String
  },
  price: {
    type: String,
    required: true
  },
  year: {
    type: String,
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
const Review = mongoose.model('Review', reviewSchema);

// export the module
module.exports = Review;
