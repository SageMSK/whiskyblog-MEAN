'use strict';

const express = require('express'),
      bodyParser = require('body-parser');

const whiskyJournalRouter = express.Router();

whiskyJournalRouter.use(bodyParser.json());

whiskyJournalRouter.route('/')
.get((req, res, next) => {

  res.end('Getting all the whisky journals!');

})

.post((req, res, next) => {

  res.end(`Adding a new whisky blog entry: ${req.body.name}!`);

})

.delete((req, res, next) => {

  res.end('Deleting ALL dishes!');

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
