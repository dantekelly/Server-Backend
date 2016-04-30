var express = require('express');
var app     = express();
var router  = express.Router();

router.get('/', function(request,response,next) {
  app.use(express.static('/applications/portfolio'));
  response.sendFile('/applications/portfolio/index.html');
});

module.exports = router;
