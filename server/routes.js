let api = require('./routes/api');
let db = require('./routes/db.js');
let router = require('express').Router();

router.get('/logout', (req, res) => {
  res.redirect('/');
})
router.post('/db/register', db.register)

router.get('/server/session', (req, res) => {
  console.log(req.session)
  res.end();
})

module.exports = router;