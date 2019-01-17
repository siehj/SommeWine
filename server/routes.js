const router = require('express').Router();
const auth = require('../service/auth.js');
const db = require('./routes/dbRoutes.js');
const api = require('./routes/apiRoutes');
const path = require('path');

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => err ? res.redirect('/'): null)
});

router.post('/logout', (req, res) => {
  req.session = null;
  res.end();
});

router.get('/auth', auth.authenticate);

router.post('/persist', db.persist);

router.post('/db/register', db.register);

router.post('/api/wines', api.search);

router.post('/db/profile', db.getUserData);

router.post('/db/profilePreferences', db.getProfilePreferences);

router.post('/db/getAllPreferences', db.getProfilePreferences);

router.post('/db/editPreferences', db.updatePreferences);

router.post('/db/userPrefs', db.getUserPreferences);

router.put('/db/updateUserProfile', db.updateUserProfile);

router.post('/db/FavoriteWine', db.favoriteWine);

module.exports = router;