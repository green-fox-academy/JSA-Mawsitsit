const validateEmail = (email) => {
  if (email === '') return 'Please provide an email.';
  if (!email.includes('@')) return 'Please use a valid email address.';
  return '';
};

const validatePhoneNumber = (phoneNumber) => {
  if (phoneNumber === '') return 'Please provide a phone number.';
  if (phoneNumber.length < 8) return 'Phone number must be at least 8 numbers long.';
  return '';
};

const checkPasswordStrength = (password) => {
  const weakPassword = new RegExp('^((?=.*[a-z])|(?=.*[0-9])|(?=.*[A-Z]))(?=.{8,})');
  const mediumPassword = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})');
  // eslint-disable-next-line no-useless-escape
  const strongPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*-])(?=.{8,})');

  if (strongPassword.test(password)) return 'Strong password.';
  if (mediumPassword.test(password)) return 'Medium password.';
  if (weakPassword.test(password)) return 'Weak password.';
  return '';
};

const validatePassword = (password) => {
  if (password.length < 8) return 'Password must be at least 8 characters long.';
  return checkPasswordStrength(password);
};

const validatePasswordComfirmation = (password, passwordConfirmation) => {
  if (!(password === passwordConfirmation)) return 'Password doesn\'t match!';
  return '';
};

export default {
  email: validateEmail,
  phoneNumber: validatePhoneNumber,
  password: validatePassword,
  passwordConfirmation: validatePasswordComfirmation,
};
