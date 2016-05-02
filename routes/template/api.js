var express        = require('express');
var request        = require('request');
var router         = express.Router();

router.get('/',function(req,res){
  var parameter = req.query.name;
  var url = __URL__ + '?example=' + parameter;

  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('Requested ' + parameter);
      var sql = JSON.parse(body);
      return res.json(sql);
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode);
    }
  });
});

module.exports = router;