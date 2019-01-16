const api = require('../../service/api.js');

module.exports = {
  search : (req, res) => {

    api.wineApi({ query: req.body.query }, (err, list) => {
      if (err) console.log(err);
      else res.send(list);
    });
      
  }
};