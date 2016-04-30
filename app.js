var express = require('express');
var app = express();
var portfolio = require('./routes/portfolio.js');

app.use('/portfolio', portfolio);

app.listen(3000, function() {
  console.log('Listening on port 3000.');
});