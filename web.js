var express = require('express');

var app = express.createServer(express.logger());

app.use(express.static('./public'));
app.get('/tracker.gif', function(request, response) {
  var ua = request.param('ua', null);
  var referrer = request.param('referrer', null);
  var url = request.param('url', null);
  
  response.sendfile('./public/images/tracker.gif');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
