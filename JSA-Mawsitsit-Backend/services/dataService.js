// Internal Dependencies
const mysqlConnection = require('../database');
const { validateLogin } = require('./validation');

const mysqlPromisedQuery = (dataConnection, queryStatement, queryInput = []) => new Promise(
  (resolve, reject) => {
    dataConnection.query(queryStatement, queryInput, (error, result) => (
      error ? reject(error) : resolve(result)
    ));
  },
);

const loginUser = async (userIdentifier, inputPassword) => {
  const loginQueryStatement = `
    SELECT * FROM users WHERE ${userIdentifier.includes('@') ? 'email' : 'phone_number'} = ?
  `;
  const loginQueryInput = [userIdentifier];

  const userToLogin = await mysqlPromisedQuery(
    mysqlConnection,
    loginQueryStatement,
    loginQueryInput,
  ).catch((error) => {
    console.log(error);
    return false;
  });

  return userToLogin && validateLogin(inputPassword, userToLogin[0]);
};

const registerQuery = async (user) => {
  const { email, phone_number: phoneNumber, password } = user;
  const registerDetail = [email, phoneNumber, password];
  const sqlInsert = 'INSERT INTO users (email, phone_number, password) VALUES (?, ?, ?);';
  const response = await mysqlPromisedQuery(mysqlConnection, sqlInsert, registerDetail)
    .catch((error) => { throw error; });
  return response.insertId;
};

const checkIdentifier = async (user) => {
  const { email, phone_number: phoneNumber } = user;
  const userIdentifier = [email, phoneNumber];
  const sqlSelectByInput = 'SELECT * FROM users  WHERE email = ? AND phone_number = ?;';
  const response = await mysqlPromisedQuery(mysqlConnection, sqlSelectByInput, userIdentifier)
    .catch((error) => { throw error; });
  return response.length !== 0;
};

module.exports = {
  checkIdentifier,
  loginUser,
  registerQuery,
};
