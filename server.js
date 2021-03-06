var http = require('http');
var express = require('express');
var routes_v1 = require('./api/routes_v1');
var routes_v2 = require('./api/routes_v2');
var bodyParser = require('body-parser');
var logger = require('morgan');

 var app = express();

 app.use(bodyParser.urlencoded({'extended':'false'}));
 app.use(bodyParser.json());
 app.use(bodyParser.json({type: 'application/vnd.api+json'}));

 app.use(logger('dev'));
 app.use('/api/v1', routes_v1);
 //app.use('/api/v2', routes_v2);

var port = process.env.PORT || 8000;

app.listen(port, function(){
    console.log("Server online op "+port);
});

module.exports = app;