var express = require('express');

var app = express.createServer(express.logger());

app.use(express.static('./public'));
app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
