var express = require('express');
var validator = require("z-schema");
var jsonJob = require('./job');
var schema = require('./schema')

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.send('Json job validator. More information: github.com/lukasz-madon/json-job');
});

app.get('/api/jobs', function(req, res) {
  res.jsonp(jsonJob);
});

app.post('/api/validate', function(req, res) {
  validator.validate(jsonJob, schema, function(err, valid) {
    console.log(arguments)
    res.json({errros: err, valid: valid});
  })
});

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost:' + app.get('port'));
});
