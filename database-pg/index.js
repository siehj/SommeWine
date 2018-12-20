require('dotenv').config();
const { Client } = require('pg');

const client = new Client(process.env.DATABASE_URL + '?ssl=true');
client.connect((err) => err ? console.log(err) : console.log('connected to db successfully!') );

const addUser = (user) => {
  let { username, password } = user;
  const query = `INSERT into users (username, password) VALUES ($1, $2);`;
  const params = [username, password];
  return new Promise ((resolve, reject) => {
    client.query(query, params, (err, data) => {
      if (err) reject(err);
      else {
        getUserInfo(username, (err, data) => {
          if (err) reject(err);
          else resolve(data);
        })
      };
    });
  });
};

const checkUsername = (username) => {
  const query = 'SELECT EXISTS (SELECT 1 FROM users WHERE username=$1);';
  const params = [username];
  return new Promise ((resolve, reject) => {
    client.query(query, params, (err, { rows }) => {
      if (err) reject(err);
      else resolve(rows[0].exists);
    })
  });
}

const findUser = (username) => {
  const query = 'SELECT EXISTS (SELECT 1 FROM users WHERE username=$1);';
  const params = [username];
  return new Promise ((resolve, reject) => {

    client.query(query, params, (err) => {
      if (err) reject(err);
      getUserInfo(username, (err, data) => {
        if (err) reject(err);
        else resolve(data[0]);
        // else console.log(data);
      })
    });   
  })
};

getUserInfo = (username, callback) => {
  const query = 'SELECT * FROM users WHERE username=$1;';
  const params = [username];
  client.query(query, params, (err, { rows }) => {
    if(err) callback(err, null);
    else callback(null, rows);
    // console.log(rows);
  });
}
// let getUserFavorites = (userId, callback) => {
//   let query = `SELECT * FROM user_wines WHERE user_id=${userId};`;
//   connection.query(query, (err, results) => {

//   });

// }

// let addUserFavorites = (userId, wine, callback) => {
//   let query = `INSERT INTO user_wines `
// }

// let findWineId = (wineName, callback) => {
//   let query = `SELECT id FROM wines WHERE name=${wineName};`;
//   connection.query(query, (err, result) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, result);
//     }
//   })
// }


module.exports = { addUser, checkUsername, findUser, getUserInfo };
