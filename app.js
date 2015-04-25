'use strict';

var express = require('express')
    , path = require('path')
    , favicon = require('serve-favicon')
    , logger = require('morgan')
    , cookieParser = require('cookie-parser')
    , bodyParser = require('body-parser')
    , i18n = require("i18n")
    , swig = require('swig');



i18n.configure({
    locales:['en', 'de'],
    directory: __dirname + '/locales',
    defaultLocale: 'en',
    cookiename: 'i18n'
});


// debug
//console.log(__dirname + '/locales')
//console.log(i18n.__('Hello'));


var app = express(); console.log('App is running.')



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.use(i18n.init);


var mongoose = require('mongoose').connect('mongodb://127.0.0.1:27017/populo');
var db = mongoose.connection;
mongoose.set('debug, true');
db
    .on('error', console.error.bind(console, 'DB connection error.'))
    .once('open', console.log.bind(console, 'DB Connection established.'));



// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico')); // odkomentiraj kada ces imati favicon
app.use(logger('dev'));





app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// ucitavanje routa - obavezno mora doci poslije ovog gornjeg definiranja: http://stackoverflow.com/questions/9177049
app.use(require('./routes'));






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
