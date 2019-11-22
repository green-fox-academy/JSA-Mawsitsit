const Users = require('../Users');
const { validateEmail } = require('./validation');

const checkPassword = (passwordFromData, passwordFromUser) => (
  passwordFromData === passwordFromUser ? 'Login successful!' : 'Wrong password!'
);

const checkLogin = (userIdentifier, passwordFromUser) => {
  const userFromData = Users.find((user) => (
    user[`${validateEmail(userIdentifier) ? 'email' : 'phone_number'}`] === userIdentifier));
  if (userFromData) {
    return checkPassword(userFromData.password, passwordFromUser);
  }
  return 'Email or phone number doesn‘t exist!';
};

module.exports = checkLogin;
