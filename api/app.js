var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var passport = require('passport');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/podcast');
db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', function callback() {
  console.log('Connected to mongodb.');
});

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(express.static(path.join(__dirname, 'public')))
    .use(session({
      secret: 'led tiger monkey',
      resave: false,
      saveUninitialized: false,
      rolling: true,
      store: new MongoStore({mongooseConnection: db})
    }))
    .use(passport.initialize())
    .use(passport.session());

app.all('/*', function(req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:9000',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With'
    });
    next();
});

var users = require('./routes/users');
app.use('/user', users);

var feeds = require('./routes/feeds');
app.use('/feeds', feeds);

var supportedAuth = require('./routes/login/supported');
app.use('/login/supported', supportedAuth);

var googleAuth = require('./routes/login/google');
app.use('/login/google', googleAuth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
