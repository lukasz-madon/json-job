var express = require('express');
var json_job = require('./job');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.send('Json job validator. More information: github.com/lukasz-madon/json-job');
});

app.get('/api/jobs', function(req, res) {
	res.jsonp(json_job);
});

app.post('/api/validate', function(req, res) {
	res.send('jobs');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost:' + app.get('port'));
});
