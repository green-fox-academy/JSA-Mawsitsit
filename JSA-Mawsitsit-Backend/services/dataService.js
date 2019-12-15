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
    SELECT * FROM user WHERE ${userIdentifier.includes('@') ? 'email' : 'phone_number'} = ?
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

const checkIdentifier = async (body) => {
  const { email, phone_number: phoneNumber } = body;
  const userIdentifier = [email, phoneNumber];
  const sqlSelectByInput = 'SELECT * FROM user  WHERE email = ? AND phone_number = ?;';

  const response = await mysqlPromisedQuery(
    mysqlConnection,
    sqlSelectByInput,
    userIdentifier,
  ).catch((error) => { throw error; });

  return response.length !== 0;
};

const registerUser = async (userToRegister) => {
  const { email, phoneNumber, password } = userToRegister;
  const registerQueryInput = [email, phoneNumber, password];
  const registerQueryStatement = 'INSERT INTO user (email, phone_number, password) VALUES (?, ?, ?);';

  const response = await mysqlPromisedQuery(
    mysqlConnection,
    registerQueryStatement,
    registerQueryInput,
  ).catch((error) => { throw error; });

  return response.insertId;
};

const sendEmailToUser = async (userId) => {
  const sendUserDetailQueryStatement = 'SELECT email FROM user_detail WHERE user_id = ?;';
  const sendUserDetailQueryInput = [userId];

  const response = await mysqlPromisedQuery(
    mysqlConnection,
    sendUserDetailQueryStatement,
    sendUserDetailQueryInput,
  ).catch((error) => { throw error; });

  return response[0];
};


const verificationLink = async (userEmail) => {
  const verificationLinkQueryStatement = 'UPDATE user_detail SET isEmailVerified=true where email = ?;';
  const verificationLinkQueryInput = [userEmail];

  await mysqlPromisedQuery(
    mysqlConnection,
    verificationLinkQueryStatement,
    verificationLinkQueryInput,
  ).catch((error) => { throw error; });
  return true;
};


module.exports = {
  checkIdentifier,
  loginUser,
  registerUser,
  sendEmailToUser,
  verificationLink,
};
