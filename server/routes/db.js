let db = require('../../database-mysql');

let login = ({ username, password }) => { console.log(username)};
let signup = ({ username, password }) => { console.log(username) };

module.exports = {
  register: (req, res) => {
    req.intent === 'login' ? signup(req.body) : login(req.body);
    res.end();
  },

};