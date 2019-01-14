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
  }



};