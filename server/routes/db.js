let db = require('../../database-pg/index.js');
const bcrypt = require('bcrypt-nodejs');

let login = ({ username, password }) => { 

  if ( !username.length || !password.length ) {
    res.send("Either the username or password is missing");
  } 
  db.findUser(username)
    .then(user => {
      if(!user) {
        res.send("Sorry, your login and or password are incorrect!");
      } else {
        console.log(user);
        return user;
      }
    })
    // .then(user => { 
    //   bcrypt.compare(password, user.password, (err, match) => {
    //     if (err || !match) {
    //       res.send(["login", "Sorry, your login and or password are incorrect!"]);
    //     } else {
    //       req.session.loggedIn = true;
    //       let userInfo = { id: user.id, name: user.name, email: user.email, phone: user.phone, vote: user.vote, city: user.city, state: user.state };
    //       res.send(userInfo);                  
    //     }
    //   })
    // })
    .catch(err => console.log)
  };

// let signup = ({ username, password }) => { 

//   if ( !username.length || !password.length ) {
//     console.log("error");
//     cb("Either the username or password is missing", null);
//   }

//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, null, (err, hash) => {
//       if (err) {
//         console.log(err);
//       } else {
//         // check if username is taken in the db
//         db.checkUsername(username)
//           .then(result => {
//             if (result) return cb("Sorry, this username is already taken");
//             else return; 
//           })
//           .then(() => {
//             let user = { username: username, password: hash };
//             db.addUser(user)
//               .then(newUser => {
//                 let userInfo = { username: newUser[0].username };
//                 cb(userInfo);
//               })
//               .catch(err => console.log(err));
//           })
//           .catch(err => console.log(err));
//       }
//     });
//   });

//  };

module.exports = {
  register: (req, res) => {
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
                  let user = { username: username, password: hash };
                  db.addUser(user)
                  .then(newUser => {
                    let userInfo = { username: newUser[0].username };
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
    login(req.body, () => res.send())
    : 
    signup(req.body);


  },

};