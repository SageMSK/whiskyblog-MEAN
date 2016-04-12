'use strict';

const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      assert = require('assert');

const Reviews = require('../models/reviews');
const whiskyReviewRouter = express.Router();

whiskyReviewRouter.use(bodyParser.json());

whiskyReviewRouter.route('/')
.get((req, res, next) => {

  Reviews.find({}, (err, whiskyReviews) => {
    assert.equal(null, err);
    res.json(whiskyReviews);
  });

})

.post((req, res, next) => {

  Reviews.create(req.body, (err, whiskyReview) => {
    assert.equal(null, err);

    console.log('New Whisky Review created!');

    let id = whiskyReview._id;
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end(`Added a whisky review with id: ${id}!`);
  });

})

.delete((req, res, next) => {

  Reviews.remove({}, (err, whiskyReviews) => {
    assert.equal(null, err);
    res.json(whiskyReviews);
  })

});

whiskyReviewRouter.route('/:whiskyId')
.get((req, res, next) => {

  Reviews.findById(req.params.whiskyId, (err, whiskyReview) => {
    assert.equal(null, err);
    res.json(whiskyReview);

    res.end(`Getting whisky blog with id: ${req.params.whiskyId}!`);
  });

})

.put((req, res, next) => {
  // new is false by default and MongoDB will return the doc as it was before the update operation was applied.
  Reviews.findByIdAndUpdate(req.params.whiskyId, {$set: req.body}, {new: true}, (err, whiskyReview) => {
    assert.equal(null, err);
    res.json(whiskyReview);
  });

})

.delete((req, res, next) => {

  Reviews.remove(req.params.whiskyId, (err, whiskyReview) => {
    assert.equal(null, err);
    res.json(whiskyReview);
    res.end(`Deleting whisky blog with id: ${req.params.whiskyId}!`);
  });

});

module.exports = whiskyReviewRouter;
