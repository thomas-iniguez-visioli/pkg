'use strict';

var express = require('express');
var rateLimit = require('express-rate-limit');
var app = express();
var Server = require('http').Server;
var server = new Server(app);

var limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

server.listen(8080);

app.use('/', express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
