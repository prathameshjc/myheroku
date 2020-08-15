//................restify server.......................
var restify=require('restify')
// const { logIn,userCreation, demotable } = require('./routes/Function');
const corsMiddleware = require('restify-cors-middleware2');
const { data } = require('jquery');
const PORT=process.env.PORT || 8080;
var path=require('path')
var serveStatic = require('serve-static-restify')
var server=restify.createServer() //server created

server.use(
    function crossOrigin(req,res,next){
      res.header("Access-Control-Allow-Origin", "*");
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Allow-Credentials', true); // If needed
      res.header("Access-Control-Allow-Origin", "*");
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      return next();
    }
  );
const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*'],
  allowHeaders: ['*'],
  exposeHeaders: ['*']
})

server.pre(cors.preflight)
server.use(cors.actual)
//setting
// if (process.env.NODE_ENV === "production") {
//   //server static content
//   //npm run build
//   server.use(restify.static(path.join(__dirname, "client/build")));
// }

console.log(__dirname);
console.log(path.join(__dirname, "client/build"));
//get data from login form
// server.get("/",(req,res)=>{ restify.plugins.serveStatic({
//       directory: __dirname,
//       default: 'index.html',
//       })
//       res.sendFile(path.join(__dirname,'client','build','index.html'))
//     });
server.post('/', userCreation);  
server.use(restify.plugins.bodyParser());


  server.get("/*", restify.plugins.serveStatic({
    directory: __dirname+"/client/build",
    default: 'index.html',
    appendRequestPath: false
   })
  );

  // server.get("/.*/", restify.plugins.serveStatic({
  //   directory: __dirname+'client/',
  //   default: 'index.html'
  //   }));

// // server.use(restify.serveStatic('client/build'))
// // server.get('*',(req,res)=>{
// //   res.sendFile(path.join(__dirname,'client','build','index.html'))
// // })

// server.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build/index.html"));
// });
server.listen(PORT, function(){
    console.log("server started...")

})
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