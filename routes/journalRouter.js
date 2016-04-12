'use strict';

const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      assert = require('assert');

const Reviews = require('../models/reviews');
const whiskyJournalRouter = express.Router();

whiskyJournalRouter.use(bodyParser.json());

whiskyJournalRouter.route('/')
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

whiskyJournalRouter.route('/:whiskyId')
.get((req, res, next) => {

  res.end(`Getting whisky blog with id: ${req.params.whiskyId}!`);

})

.put((req, res, next) => {

  res.end('Editing the current whisky!');

})

.delete((req, res, next) => {

  res.end(`Deleting whisky blog with id: ${req.params.whiskyId}!`);

});

module.exports = whiskyJournalRouter;
