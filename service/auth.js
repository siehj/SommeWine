const axios = require('axios');

const authenticate = (req, res) => {
  // console.log(req.session)
  // console.log(req.session.user.username);
  // console.log(req.query.user);
  req.session.user.username === req.query.user ? res.send(true) : res.send(false);
};

const authCheck = () => {
  let url = window.location.href.split('/')
  let givenUser = url[url.length - 1];
  if (givenUser === sessionStorage.getItem('auth')) return true;
  else axios.get(`/auth?user=${sessionStorage.getItem('auth')}`).then(({ data }) => {
    return data
  });
};

const persistUser = () => {
  if(sessionStorage.getItem('auth')) {
    return sessionStorage.getItem('auth').length ? axios.post(`/persist`, { user: sessionStorage.getItem('auth') }) : false;
  }
  else {
    return false;
  } 
}

module.exports = { authenticate, authCheck, persistUser };
