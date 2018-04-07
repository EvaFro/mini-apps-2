var express = require('express');
var app = express();

app.use('/', (req, res, next) => {
  console.log(`${req.method} received from ${req.url}`);
  next();
});

app.use(express.static(__dirname+'/public'));



app.listen(3000, ()=> console.log('listing on port 3000'));


