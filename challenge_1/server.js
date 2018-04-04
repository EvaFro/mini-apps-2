var express = require('express');
var bodyParser = require('body-parser');
var App = express();

// App.use(bodyParser.json());

App.use(express.static(__dirname + '/public'));

App.listen(3000, function() {
  console.log(`listening on port: localHost:3000!`);
});