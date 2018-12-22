const router = require('express').Router();
const auth = require('../service/auth.js');
const db = require('./routes/db.js');
const api = require('./routes/api');
const path = require('path');

const isAuthenticated = (req, res, next) => {
  req.session.user ? next() : next();
}

router.get('/*', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => err ? res.redirect('/'): null)
});

router.post('/persist', db.persist);

router.post('/logout', (req, res) => {
  req.session = null;
  res.end();
})


router.post('/db/register', db.register)

router.get('/auth', auth.authenticate)

module.exports = router;