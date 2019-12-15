// Internal Dependencies
const mysqlConnection = require('../database');

const mysqlPromisedQuery = (dataConnection, queryStatement, queryInput = []) => new Promise(
  (resolve, reject) => {
    dataConnection.query(queryStatement, queryInput, (error, result) => (
      error ? reject(error) : resolve(result)
    ));
  },
);

const savePersonalData = async (userToRegister) => {
  const { userId, email, phoneNumber } = userToRegister;
  const saveUserDetailQueryInput = [userId, email, phoneNumber];
  const saveUserDetailQueryStatement = 'INSERT INTO user_detail (user_id, email, phone_number) VALUES (?, ?, ?);';

  await mysqlPromisedQuery(
    mysqlConnection,
    saveUserDetailQueryStatement,
    saveUserDetailQueryInput,
  ).catch((error) => { throw error; });
};

const sendPersonalData = async (userId) => {
  const sendUserDetailQueryStatement = 'SELECT * FROM user_detail WHERE user_id = ?;';
  const sendUserDetailQueryInput = [userId];

  const response = await mysqlPromisedQuery(
    mysqlConnection,
    sendUserDetailQueryStatement,
    sendUserDetailQueryInput,
  ).catch((error) => { throw error; });

  return response[0];
};

const updatePersonalData = async (userId, updateProp, updateValue) => {
  const updatePersonalDataQueryStatement = `
    UPDATE user_detail SET ${updateProp} = ? WHERE user_id = ?;
  `;
  const updatePersonalDataQueryInput = [updateValue, userId];

  await mysqlPromisedQuery(
    mysqlConnection,
    updatePersonalDataQueryStatement,
    updatePersonalDataQueryInput,
  ).catch((error) => { throw error; });

  return {
    userId,
    [updateProp]: updateValue,
  };
};

module.exports = {
  savePersonalData,
  sendPersonalData,
  updatePersonalData,
};
