var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var getCoapData = require('./routes/getCoapData');
var getHttpData = require('./routes/getHttpData');
var getMqttData = require('./routes/getMqttData');

var rtgs_http = require('./routes/rtgs-http');
var rtgs_coap = require('./routes/rtgs-coap');
var rtgs_mqtt = require('./routes/rtgs-mqtt');

var get_http = require('./routes/get-http');
var get_coap = require('./routes/get-coap');
var get_mqtt = require('./routes/get-mqtt');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.use('/getCoapData', getCoapData);
app.use('/getHttpData', getHttpData);
app.use('/getMqttData', getMqttData);

app.use('/http', rtgs_http);
app.use('/coap', rtgs_coap);
app.use('/mqtt', rtgs_mqtt);

app.use('/get-http', get_http);
app.use('/get-coap', get_coap);
app.use('/get-mqtt', get_mqtt);

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
