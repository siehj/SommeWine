require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
const wineApi = require('../service/api.js');
var body = require('body-parser');
var db = require('../database-mysql');

var app = express();
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
  // let response = [];
  // wineApi.wineApi({query: request.join(' ')})
  //   .then(result => {
  //     result.map(wine => {
  //       response.push({
  //         name: wine.name,
  //         region: wine.region,
  //         winery: wine.winery,
  //         price: wine.price,
  //         vintage: wine.vintage,
  //         type: wine.type,
  //         link: wine.link,
  //         image: wine.image,
  //         rating: wine.rating
  //       })
  //     })
  //     return response;
  //   })
  //   .then((response) => {
  //     res.end(response);
  //   })
  //   .catch(console.log)
 
  let response = [];

  wineApi.wineApi({
    query: request.join(' ')
  }, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(results);
      results.map(wine => {
        response.push({
          name: wine.name,
          region: wine.region,
          winery: wine.winery,
          price: wine.price,
          vintage: wine.vintage,
          type: wine.type,
          link: wine.link,
          image: wine.image,
          rating: wine.rating
        })
      })
      res.send(response);
    }
  })
})

app.get('/db/userData', (req, res) => {
  // console.log(req);
  let username = req.url.split('=')[1];
  res.send();
})

app.post('/db/favs', (req, res) => {
  console.log(req.body);

  // save to the db of favs.
  res.end();
})

app.post('/db/register', (req, res) => {
  console.log('server Hi!')
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`)
})