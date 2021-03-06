var express = require('express');
var routes = express.Router();

var mijnObject = {
    mijntekst: "Hello world!"
}

routes.get('/hello', function(req, res){
    res.contentType('application/json');
    console.log(req.url);
    res.status(200);
    res.json(mijnObject);
});

routes.get('/goodbye', function(req, res){
    res.contentType('application/json');
    res.status(200);
    res.json({'tekst': 'goodbye'});
});

routes.post('/derp', function(req, res){
    console.log(req.body);
    res.json(mijnObject)
})

module.exports = routes;

