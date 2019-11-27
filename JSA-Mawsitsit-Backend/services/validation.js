const weakRegex = new RegExp('^((?=.[a-z])|(?=.[0-9])|(?=.*[A-Z]))(?=.{8,})');
const validateEmail = (email) => !email || email.includes('@');
const validatePhoneNumber = (phoneNumber) => !phoneNumber || phoneNumber.length >= 8;
const validatePassword = (password) => !password || weakRegex.test(password);

const validateLogin = (inputPassword, userToLogin) => {
  if (!userToLogin) return 'User doesn\' exit. Please check your username.';
  return inputPassword === userToLogin.password
    ? 'Welcome!!!'
    : 'Password doesn\'t match. Please check your password.';
};

const validateRegister = (body) => {
  if (!validateEmail(body.email)) return 'Error in email.';
  if (!validatePhoneNumber(body.phone_number)) return 'Error in phone number.';
  if (!validatePassword(body.password)) return 'Error in password.';
  return '';
};

module.exports = {
  validateEmail,
  validateLogin,
  validatePassword,
  validatePhoneNumber,
  validateRegister,
};
