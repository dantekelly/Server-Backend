var express        = require('express');
var app            = express();                  // create our app w/ express
var morgan         = require('morgan');          // log requests to the console (express4)
var path           = require('path');

// Specify route points ================================================================================
var template = require('./routes/jobFinder/index');
var templateAPI = require('./routes/jobFinder/api');

// Change root path to route path ======================================================================
app.use('/template', express.static(__dirname + '/public/template'));

// Route requests ======================================================================================
app.use('/template', template);
app.use('/template/api', templateAPI);

// listen (start app with node server.js) ==============================================================
app.listen(8080);
console.log("App listening on port 8080");