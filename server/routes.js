const router = require('express').Router();
const auth = require('../service/auth.js');
const db = require('./routes/db.js');
const api = require('./routes/api');
const path = require('path');

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.redirect('/');
    }
  })
})

// router.get('/dashboard/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'))
// })

router.get('/logout', (req, res) => {
  console.log(req.session)
  req.session = null;
  console.log(req.session)
 
  res.redirect('/');
})


router.post('/db/register', db.register)

router.get('/auth', auth.authenticate)

module.exports = router;