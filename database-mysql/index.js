var mysql = require('mysql');
var config = require('../config.js');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : config.dbU,
  password : config.dbPW,
  database : 'swDB'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

let getAllUserData = () => {
  //will call on other functions. 
}

let addUser = (un, pw, callback) => {
  connection.query('INSERT INTO users (username, password) VALUES ();');
}

let checkUser = (un, callback) => {
  let query = `SELECT id FROM users WHERE EXISTS ()`;

  //will also need to check the password.
}


let getUserFavorites = (userId, callback) => {
  let query = `SELECT * FROM user_wines WHERE user_id=${userId};`;
  connection.query(query, (err, results) => {

  });

}

let addUserFavorites = (userId, wine, callback) => {
  let query = `INSERT INTO user_wines `
}

let findWineId = (wineName, callback) => {
  let query = `SELECT id FROM wines WHERE name=${wineName};`;
  connection.query(query, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}


module.exports = {selectAll};

