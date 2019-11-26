// Internal Dependencies
const mysqlConnection = require('../database');

const mysqlPromisedQuery = (dataConnection, queryStatement, queryInput = []) => new Promise(
  (resolve, reject) => {
    dataConnection.query(queryStatement, queryInput, (error, result) => (
      error ? reject(error) : resolve(result)
    ));
  },
);

const registerQuery = async (user) => {
  const { email, phone_number: phoneNumber, password } = user;
  const registerDetail = [email, phoneNumber, password];
  const sqlInsert = 'INSERT INTO users (email, phone_number, password) VALUES (?, ?, ?);';
  try {
    const response = await mysqlPromisedQuery(mysqlConnection, sqlInsert, registerDetail);
    return response.insertId;
  } catch (error) {
    return error;
  }
};

const checkIdentifier = async (user) => {
  const { email, phone_number: phoneNumber } = user;
  const userIdentifier = [email, phoneNumber];
  const sqlSelectByInput = 'SELECT * FROM users  WHERE email = ? AND phone_number = ?;';
  try {
    const response = await mysqlPromisedQuery(mysqlConnection, sqlSelectByInput, userIdentifier);
    return response.length !== 0;
  } catch (error) {
    return error;
  }
};

module.exports = { registerQuery, checkIdentifier };
