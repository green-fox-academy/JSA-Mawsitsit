const Users = require('../Users');

const weakRegex = new RegExp('^((?=.[a-z])|(?=.[0-9])|(?=.*[A-Z]))(?=.{8,})');

const validateEmail = (email) => !email || email.includes('@');
const validatePhoneNumber = (phoneNumber) => !phoneNumber || phoneNumber.length >= 8;
const validatePassword = (password) => !password || weakRegex.test(password);

const checkPassword = (passwordFromData, passwordFromUser) => (
  passwordFromData === passwordFromUser ? 'Login successful!' : 'Wrong password!'
);

const checkLogin = (userName, passwordFromUser) => {
  const userFromData = Users.find((user) => (
    user[`${validateEmail(userName) ? 'email' : 'phone_number'}`] === userName));
  if (userFromData) {
    return checkPassword(userFromData.password, passwordFromUser);
  }
  return `${validateEmail(userName) ? 'Email' : 'Phone number'} don‘t exist!`;
};

module.exports = {
  validatePassword,
  validateEmail,
  validatePhoneNumber,
  checkLogin,
};
