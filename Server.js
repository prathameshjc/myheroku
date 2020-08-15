//................restify server.......................
var restify = require("restify");
var server = restify.createServer();
const path = require('path');

function respond(req, res, next) {
    res.send('Hello Restify!');
}

server.get('/hello', respond);
serve.get('/*',restify.plugins.serveStatic({
  directory:'/build/client',
  default:'index.html'
}))
// server.get(/\/?.*/, restify.plugins.serveStatic({
//   directory: '../build'
// }))
// server.get("*", restify.plugins.serveStatic({
//   directory: __dirname+"/client/build",
//   default: 'index.html',
//   appendRequestPath: false
//  })
// );
// server.pre(serve_static(path.join(__dirname, '..', 'build')))
var port = process.env.PORT || 5000;
server.listen(port, function() {
    console.log("Listening on " + port);
});
//................express Server.......................
// const express = require('express');
// const favicon = require('express-favicon');
// const path = require('path');
// const port = process.env.PORT || 8080;
// const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico'));
// // the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
// app.listen(port);