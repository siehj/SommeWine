
const authenticate = (req, res) => {
  // console.log(req.session.user.username);
  // console.log(req.query.user);
  req.session.user.username === req.query.user ? res.send(true) : res.send(false);
};

module.exports = { authenticate };
