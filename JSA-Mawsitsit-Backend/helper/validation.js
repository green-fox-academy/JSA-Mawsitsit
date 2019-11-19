const weakRegex = new RegExp('^((?=.[a-z])|(?=.[0-9])|(?=.*[A-Z]))(?=.{8,})');

const validateEmail = (email) => !email || email.indexOf('@') === -1;
const validatePhoneNumber = (phoneNumber) => !phoneNumber || phoneNumber.length < 8;
const validatePassword = (password) => !password || !weakRegex.test(password);

module.exports = {
  validatePassword,
  validateEmail,
  validatePhoneNumber,
};
