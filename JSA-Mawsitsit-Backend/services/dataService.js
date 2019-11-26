// Internal Dependencies
const mysqlConnection = require('../database');

const mysqlPromisedQuery = (dataConnection, queryStatement, queryInput = []) => new Promise(
  (resolve, reject) => {
    dataConnection.query(queryStatement, queryInput, (error, result) => (
      error ? reject(error) : resolve(result)
    ));
  },
);

const loginUser = async (userIdentifier, password) => {
  const loginQueryStatement = `
    SELECT password FROM users WHERE ${userIdentifier.includes('@') ? 'email' : 'phone_number'} = ?
  `;
  const loginQueryInput = [userIdentifier];

  const loggedInUserPassword = await mysqlPromisedQuery(
    mysqlConnection,
    loginQueryStatement,
    loginQueryInput,
  ).catch((error) => error);

  if (loggedInUserPassword.length === 0) return 'User doesn\' exit. Please check your username.';
  return password === loggedInUserPassword[0].password
    ? `Welcome ${userIdentifier}!`
    : 'Password doesn\'t match. Please check your password.';
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

module.exports = { loginUser };
