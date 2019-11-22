const Users = require('../Users');
const { validateEmail } = require('./validation');

const checkPassword = (passwordFromData, passwordFromUser) => (
  passwordFromData === passwordFromUser ? 'Login successful!' : 'Wrong password!'
);

const checkLogin = (userName, passwordFromUser) => {
  const userFromData = Users.find((user) => (
    user[`${validateEmail(userName) ? 'email' : 'phone_number'}`] === userName));
  if (userFromData) {
    return checkPassword(userFromData.password, passwordFromUser);
  }
  return 'Username doesn‘t exist!';
};

module.exports = checkLogin;
