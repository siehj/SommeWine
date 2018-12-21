const axios = require('axios');

const authenticate = (req, res) => {
  // console.log(req.session.user.username);
  // console.log(req.query.user);
  req.session.user.username === req.query.user ? res.send(true) : res.send(false);
};

const authCheck = () => {
  let url = window.location.href.split('/')
  let givenUser = url[url.length - 1];
  if (givenUser === localStorage.getItem('auth')) return true;
  else return axios.get(`/auth?user=${givenUser}`).then(({ data }) => {return data});
};

module.exports = { authenticate, authCheck };
