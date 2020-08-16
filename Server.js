//................restify server.......................
var restify = require("restify");
var server = restify.createServer();
const path = require('path');

function respond(req, res, next) {
    res.send('Hello Restify!');
}

server.get('/hello', respond);
server.get('/*',restify.plugins.serveStatic({
  directory:'./build',
  default:'index.html'
}))

var port = process.env.PORT || 5000;
server.listen(port, function() {
    console.log("Listening on " + port);
});
