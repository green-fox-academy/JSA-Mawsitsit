const passwordStrength = (password) => {
  // eslint-disable-next-line no-useless-escape
  const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*-])(?=.{8,})');
  const mediumRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})');
  const weakRegex = new RegExp('^((?=.*[a-z])|(?=.*[0-9])|(?=.*[A-Z]))(?=.{8,})');
  if (strongRegex.test(password)) {
    return 3;
  }
  if (mediumRegex.test(password)) {
    return 2;
  }
  if (weakRegex.test(password)) {
    return 1;
  }
  return 0;
};

export const emailValidate = (email) => {
  let emailError = '';
  if (email === '') {
    emailError = 'E-mail is required';
  } else if (!email.includes('@')) {
    emailError = 'Not valid Email address';
  }
  return emailError;
};

export const phoneNumberValidate = (phoneNumber) => {
  let phoneNumberError = '';
  if (phoneNumber === '') {
    phoneNumberError = 'Phone number is required';
  } else if (phoneNumber.length < 8) {
    phoneNumberError = 'Not valid phone number';
  }
  return phoneNumberError;
};

export const passwordValidate = (password) => {
  let passwordMessage = '';
  if (passwordStrength(password) === 3) {
    passwordMessage = 'Strong password';
  } else if (passwordStrength(password) === 2) {
    passwordMessage = 'Medium password';
  } else if (passwordStrength(password) === 1) {
    passwordMessage = 'Weak password';
  } else {
    passwordMessage = 'Please input a valid password!';
  }
  return passwordMessage;
};

export const passwordCheck = (password, passwordConfirm) => {
  let checkMessage = '';
  if (!(password === passwordConfirm)) {
    checkMessage = 'Password has to match!';
  }
  return checkMessage;
};
