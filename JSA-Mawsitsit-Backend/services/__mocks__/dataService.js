// Internal Dependencies
const { validateLogin } = require('../validation');

// Mock Data
const mockUsers = [
  {
    email: 'email1@gmail.com',
    phone_number: '12345676',
    password: 'password1',
  },
  {
    email: 'email2@gmail.com',
    phone_number: '12345677',
    password: 'password2',
  },
  {
    email: 'email3@gmail.com',
    phone_number: '12345678',
    password: 'password3',
  },
  {
    email: 'email4@gmail.com',
    phone_number: '12345679',
    password: 'password4',
  },
];

// Mock Functions
const loginUser = async (userIdentifier, inputPassword) => {
  const userToLogin = mockUsers.find((user) => userIdentifier === user[
    userIdentifier.includes('@') ? 'email' : 'phone_number'
  ]);

  return validateLogin(inputPassword, userToLogin);
};

const registerQuery = () => 5;

const checkIdentifier = (object) => {
  const { email, phone_number: phoneNumber } = object;
  const result = mockUsers.find((user) => (
    email === user.email && phoneNumber === user.phone_number
  ));
  return Boolean(result);
};

module.exports = {
  checkIdentifier,
  loginUser,
  registerQuery,
};
