require('dotenv').config();
const mysql = require('mysql');

const mysqlConnection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const queryWithPromise = (sqlString) => new Promise((resolve, reject) => {
  mysqlConnection.query(sqlString, (error, result) => {
    if (error) {
      reject(error);
    }
    resolve(result);
  });
});

module.exports = { mysqlConnection, queryWithPromise };
