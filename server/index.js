var express = require('express');
var bodyParser = require('body-parser');
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
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/api/wines', (req, res) => {
  // console.log(req);
  let query = req.url.split('=')[1];
  res.send();
})

app.get('/db/userData', (req, res) => {
  // console.log(req);
  let username = req.url.split('=')[1];
  res.send();
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
