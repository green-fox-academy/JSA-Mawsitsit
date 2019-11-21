const Users = require('../Users');
const validation = require('./validation');

const checkPassword = (passwordFromData, passwordFromUser) => (
  passwordFromData === passwordFromUser ? 'Login successful!' : 'Wrong password!'
);

const checkLogin = (userName, passwordFromUser) => {
  const userFromData = Users.find((user) => (
    user[`${validation.validateEmail(userName) ? 'email' : 'phone_number'}`] === userName));
  if (userFromData) {
    return checkPassword(userFromData.password, passwordFromUser);
  }
  return `${validation.validateEmail(userName) ? 'Email' : 'Phone number'} don‘t exist!`;
};

module.exports = checkLogin;
