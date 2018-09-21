var express = require('express');
var bodyParser = require('body-parser');
const wineApi = require('../react-client/api.js');
// var body = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/items', function (req, res) {
  items.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/api/wines', (req, res) => {
  // console.log(req.body);
  // let query = req.url.split('=')[1];
  let request = [];
  if (req.body.query.length !== 0) {
    request.push(req.body.query)
  }
  // all = Object.values(req.body.additional);
  if(req.body.additional !== undefined) {
    if (req.body.additional.types) {
      request.push(req.body.additional.types[0]);
    }
    if (req.body.additional.regions) {
      request.push(req.body.additional.regions[0]);
    }
    if (req.body.additional.notes) {
      request.push(req.body.additional.notes[0]);
    }
  }
  // console.log(request.join(' '));
  wineApi.wineApi({
    query: request.join(' ')
  }, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  })
  res.end('got it');
})

app.get('/db/userData', (req, res) => {
  // console.log(req);
  let username = req.url.split('=')[1];
  res.send();
})

app.listen(3000, function () {
  console.log('listening on port 3000!');
});