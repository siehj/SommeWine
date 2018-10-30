const request = require('request');
const config = require('../config.js');

const wineApi = (query, callback) => {
  // console.log(query);
  let options = {
    akey: config.TOKEN,
    ip: config.ip,
    u: config.username,
    p: config.password,
    n: 20,
    q: query.query
  }
  // q = query
  //color= red, white, rose
  //c = country
  request({url: 'http://api.snooth.com/wines/', qs: options}, (err, res, body) => {
    if(err) {
      callback(err, null);
    } else {
      // console.log('res ', res);
      // console.log('body ', JSON.parse(body).wines);
      callback(null, JSON.parse(body).wines);
    }
  })
}

module.exports.wineApi = wineApi;