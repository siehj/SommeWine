let api = require('./routes/api');
let db = require('./routes/db.js');
let router = require('express').Router();

// router.get('/', (req, res) => {

// })
router.post('/db', db.register)

module.exports = router;