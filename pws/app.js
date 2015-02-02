var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var mail = require('./routes/mail');

var app = express();

var html_dir = './html/';
app.locals.json = require(__dirname + "/config/data/data.json");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/images/ico/me.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'html')));

app.use('/', routes);
app.use('/mail', mail);
//app.use('/mail', function (req , res , next) {console.log("test");})

app.get('/resume', function(req, res){
 
  res.redirect('/resume/html');
});

//serve static html resume file
app.get('/resume/html', function(req, res) {
	 var options = {
    	root: __dirname + '/html',
    	dotfiles: 'deny',
    	headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    	}
  	};
    res.sendFile("resume.html", options);
});

app.get('/resume/doc', function(req, res){
  var file = __dirname + '/public/resume/Rushabh_Padalia_Resume.docx';
  res.download(file); // Set disposition and send it.
});

app.get('/resume/pdf', function(req, res){
  var file = __dirname + '/public/resume/Rushabh_Padalia_Resume.pdf';
  res.download(file); // Set disposition and send it.
});

app.get('/resume/*', function(req, res){
  res.redirect('/resume/html');
});

//catch 404 error
app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
	if(err.status !== 404){
		return next();	
	}
	
	res.render("404");
});

app.use(function(err, req, res,next){
	res.status(500);
	res.send('opps! something broke');
});

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
