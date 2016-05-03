'use strict';

const express = require('express'),
      path = require('path'),
      favicon = require('serve-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose')
      passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy;

// MongoDB/Mongoose
// Starting the localhost server
// cd C:\Program Files\MongoDB\Server\3.2\bin
// mongod.exe --dbpath C:\Users\minsookim\Desktop\whiskyblog\data
const url = 'mongodb://localhost:27017/whiskyblog';
mongoose.connect(url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', () => {
  // we're connected!
  console.log('Connected to MongoDB server!');
});

const routes = require('./routes/index');
const users = require('./routes/users');
const reviewRouter = require('./routes/reviewRouter');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/whiskies', reviewRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
