const api = require('../../service/api.js');

module.exports = {
  search : (req, res) => {
    let request = [];
    if (req.body.query.length !== 0) {
      request.push(req.body.query)
    }
    // all = Object.values(req.body.additional);
    // if(req.body.additional !== undefined) {
    //   if (req.body.additional.types) {
    //     request.push(req.body.additional.types[0]);
    //   }
    //   if (req.body.additional.regions) {
    //     request.push(req.body.additional.regions[0]);
    //   }
    //   if (req.body.additional.notes) {
    //     request.push(req.body.additional.notes[0]);
    //   }
    // }
    api.wineApi({query: request.join(' ')}, (err, list) => {
      if (err) console.log(err);
      else res.send(list);
    })
      
    // api.wineApi(req.url)
    // res.send()
  }
};