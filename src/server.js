const express = require('express');
const server = express();
const path = require('path');

// require('./routes');

server.use(express.static('public'))

server.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'src', 'views', 'index.html'))
});

server.get('/create-point', function (req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'src', 'views', 'create-point.html'))
});

server.get('/search-results', function (req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'src', 'views', 'search-results.html'))
});

server.listen(3000);