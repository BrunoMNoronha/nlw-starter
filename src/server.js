const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const connection = require('./database/connection');

nunjucks.configure('src/views', {
  express: server,
  noCache: true
});

server.use(express.urlencoded({ extend: true }));

server.use(express.static('public'));

server.get('/', function (req, res) {
  return res.render('index.html');
});

server.get('/create-point', function (req, res) {
  return res.render('create-point.html');
});

server.get('/search', function (req, res) {

  const search = req.query.search;

  if (search == "") {
    return res.render('search-results.html', { total: 0 });

  }

  connection.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
    if (err) {
      return console.log(err);
    }
    const total = rows.length;
    return res.render('search-results.html', { places: rows, total });
  })
});

server.post('/store', function (req, res) {
  const query = `
  INSERT INTO places (
    image,
    name,
    address,
    address2,
    state,
    city,
    items
  ) VALUES (?, ?, ?, ?, ?, ? ,?);
`;
  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ];

  function afterInsertData(err) {
    if (err) {
      return console.log(err);
    }

    return res.render('create-point.html', { saved: true });
  }

  connection.run(query, values, afterInsertData);
});

server.listen(3000);