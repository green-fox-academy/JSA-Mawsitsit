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

module.exports = { loginUser };
