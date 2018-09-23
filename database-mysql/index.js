var mysql = require('mysql');
var config = require('./config.js')

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

var addUser = function(callback) {
  connection.query('INSERT INTO users ()')
}

module.exports = {selectAll};

