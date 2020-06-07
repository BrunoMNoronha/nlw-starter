const express = require('express');
const server = express();
const path = require('path');

server.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'src', 'views', 'index.html'))
});