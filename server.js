// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var useragent = require('express-useragent');

app.use (useragent.express ());

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.json ({
    ip: request.headers ['x-forwarded-for'].split (',') [0],
    language: request.headers ['accept-language'].split (',') [0],
    os: request.useragent.os
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
