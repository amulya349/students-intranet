var express = require('express');
var app     = express();
var port 	= process.env.PORT || 8080;
var path 	= require('path');
// var passport = require('passport');

app.use(express.static(path.join(__dirname, '../resources/public')));
app.set('views', path.join(__dirname, '../resources/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// launch ======================================================================
app.listen(port);
console.log('Listening at http://localhost:' + port);

// routes here =================================================================
require('./app/routes.js')(app)

