let db = require('../../database-pg/index.js');
let helper = require('../../service/helpers');
const bcrypt = require('bcrypt-nodejs');

module.exports = {
  register: (req, res) => {
    let login = ({ username, password }) => { 

      if ( !username.length || !password.length ) {
        res.send("Either the username or password is missing");
      } 
      db.findUser(username)
        .then(user => {
          if(!user) {
            res.send("Sorry, your login and or password are incorrect!");
          } else {
            return user;
          }
        })
        .then(user => { 
          bcrypt.compare(password, user.password, (err, match) => {
            if (err || !match) {
              res.send("Sorry, your username and or password are incorrect!");
            } else {
              req.session.user = { username: user.username, userId: user.id };
              // console.log(req.session.user)
              // console.log(req.session.id)
              let userInfo = { username: user.username };
              res.send(userInfo);                  
            }
          })
        })
        .catch(err => console.log)
      };

    let signup = ({ username, password }) => { 

      if ( !username.length || !password.length ) {
        console.log("error");
        cb("Either the username or password is missing", null);
      }
    
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, null, (err, hash) => {
          if (err) {
            console.log(err);
          } else {
            // check if username is taken in the db
            db.checkUsername(username)
              .then(result => {
                if (result) res.send("Sorry, this username is already taken");
                else {
                  let user = { user: username, password: hash };
                  db.addUser(user)
                  .then(newUser => {
                    let userInfo = { username: newUser[0].username };
                    req.session.user = { username: newUser[0].username, userId: newUser[0].id };
                    // console.log(req.session.user)
                    res.send(userInfo);
                  })
                  .catch(err => console.log(err));
                } 
              })
              .catch(err => console.log(err));
          }
        });
      });
    
     };
     
    req.body.intent === 'login' ? 
    login(req.body)
    : 
    signup(req.body);
  },
  persist : (req, res) => {
    //this will see if the user exists,
      // if not, then they will not persist user. return false; 
      // if they do exist, then get the user info to start a session in the db for them. return true;
    let user = req.body.user;
    db.checkUsername(user)
      .then(result => {
        result ? 
        db.findUser(user)
          .then(userInfo => {
            req.session.user = { username: userInfo.username, userId: userInfo.id };
            res.send(result);
          })
        : res.send(result)
      }) 
  },

  getUserData : (req, res) => {
    let user = req.session.user.username;

    db.getUserData(user)
      .then(userInfo => res.send(userInfo[0]))
      .catch(err => console.log(err));
    // res.end("hola")
  },

  getProfilePreferences : (req, res) => {
    db.getAllPreferences()
      .then(prefs => helper.shapePreferences(prefs))
      .then(result => res.send(result))
      .catch(err => console.log(err));
  },

  updatePreferences : (req, res) => {
    //promise entire array
    let username = req.session.user.username;
      req.body.newPreferences.map(obj => {
        new Promise ((resolve, reject) => {
          //check each item to see if they exist in the table
          db.checkPreferenceExists(username, obj)
            .then(result => {
              if(result[0].exists) {
                // console.log('exists, now we need to remove')
                db.deleteUserPreference(username, obj)
                  .then(() => res.end())
                  .catch(err => console.log)
              } else {
                // console.log('doesnt exist, now we need to add')
                db.addUserPreference(username, obj)
                  .then(() => res.end())
                  .catch(err => res.end())
              }
            })
            .catch(err => console.log)
          })
      })
  },

  getUserPreferences : (req, res) => {
    let username = req.session.user.username;
    let list = [];
    db.getUserPreferences(username)
      .then(result => {
        let length = result.length;
        return result.map(prefs => { 
          new Promise ((resolve, reject) => {
            db.getPrefById(prefs.preference_id)
              .then((result) => resolve(list.push(result[0])))
              .then(() => { if(list.length === length) res.send(list) } )
              .catch(err => reject(err))
          })
        })
      })
      .catch(err => console.log('this is an error2'))
  },

  updateUserProfile : (req, res) => {
    let username = req.session.user.username;
    db.updateUser(req.body.name, req.body.email, username)
      .then(() => res.end());
  },

  favoriteWine : (req, res) => {
    let username = req.session.user.username;
    db.checkFavorites(username, req.body.wine.name)
      .then((result) => {
        if (result[0].exists) {
          //remove from favorites
          db.removeWineFromFavorites(username, req.body.wine.name)
            .then(() => res.end());
        }
        else {
          //add to favorites (add to wines first);
          db.checkWineDB(req.body.wine.name)
            .then((response) => {
              if (response[0].exists) {
                // if in the wine db, add to favorite 
                db.addWineToFavorites(username, req.body.wine.name)
                  .then(() => res.end())
              } else {
              //   // if not, then add to winedb
                db.addWineToDB(req.body.wine)
                  .then(() => { 
                    db.addWineToFavorites(username, req.body.wine.name)
                      .then(() => res.end())
                  })
              }
            })

        }
      })
      .catch(err => console.log(err));
  },

  getUserFavorites : (req, res) => {
    let username = req.session.user.username;
    let allFavorites = [];
    let namesOnly = [];

    db.getUserFavorites(username)
      .then(results => {
        let length = results.length;
        results.map((wine) => {
          db.getWineById(wine.wine_id)
            .then((stuff) => {
              allFavorites.push(stuff[0])
              namesOnly.push(stuff[0].name)
            })
            .then(() => { if (namesOnly.length === length) res.send({ namesOnly, allFavorites }) })
          })
        })
        .catch(err => console.log(err))
  },

  tasteListWine : (req, res) => {
    let username = req.session.user.username;
    db.checkTasteList(username, req.body.wine.name)
      .then((result) => {
        if (result[0].exists) {
          //remove from favorites
          console.log('result', result[0].exists)
          db.removeWineFromTasteList(username, req.body.wine.name)
            .then(() => res.end());
        }
        else {
          //add to favorites (add to wines first);
          db.checkWineDB(req.body.wine.name)
            .then((response) => {
              if (response[0].exists) {
                // if in the wine db, add to favorite 
                db.addWineToTasteList(username, req.body.wine.name)
                  .then(() => res.end())
              } else {
              //   // if not, then add to winedb
                db.addWineToDB(req.body.wine)
                  .then(() => { 
                    db.addWineToTasteList(username, req.body.wine.name)
                      .then(() => res.end())
                  })
              }
            })

        }
      })
      .catch(err => console.log(err));
  },

  getUserTasteList : (req, res) => {
    let username = req.session.user.username;
    let allTasteList = [];
    let namesOnly = [];

    db.getUserTasteList(username)
      .then(results => {
        let length = results.length;
        results.map((wine) => {
          db.getWineById(wine.wine_id)
            .then((stuff) => {
              allTasteList.push(stuff[0])
              namesOnly.push(stuff[0].name)
            })
            .then(() => { if (namesOnly.length === length) res.send({ namesOnly, allTasteList }) })
          })
        })
        .catch(err => console.log(err))
  },



};