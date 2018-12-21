let api = require('./routes/api');
let db = require('./routes/db.js');
const auth = require('../service/auth.js');
let router = require('express').Router();

router.get('/logout', (req, res) => {
  res.redirect('/');
})
router.post('/db/register', db.register)

router.get('/auth', auth.authenticate)

module.exports = router;