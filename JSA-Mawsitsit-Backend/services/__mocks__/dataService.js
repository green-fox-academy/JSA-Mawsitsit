// Internal Dependencies
const { validateLogin } = require('../validation');

// Mock Data
const mockUsers = [
  {
    email: 'email1@gmail.com',
    phone_number: '12345676',
    password: '$2a$10$XQnzHFZcA7D9w87KOxkVNeH7j9UMSjsBlC3qoUGKN0lJ7oAjW6Xl2',
  },
  {
    email: 'email2@gmail.com',
    phone_number: '12345677',
    password: '$2a$10$XQnzHFZcA7D9w87KOxkVNeTZy9k72cnOFarzDXREh.eQfBBNJgDdW',
  },
  {
    email: 'email3@gmail.com',
    phone_number: '12345678',
    password: '$2a$10$XQnzHFZcA7D9w87KOxkVNeUrQP64dSRU4f.H.NUHBxqJaB9bsVYna',
  },
  {
    email: 'email4@gmail.com',
    phone_number: '12345679',
    password: '$2a$10$XQnzHFZcA7D9w87KOxkVNe1Ui0Z1b.o/.viG4MywNJ3XG9YNIDBc.',
  },
];

// Mock Functions
const loginUser = (userIdentifier, inputPassword) => {
  const userToLogin = [];
  const user = mockUsers.find((mockUser) => userIdentifier === mockUser[
    userIdentifier.includes('@') ? 'email' : 'phone_number'
  ]);
  if (user !== undefined) userToLogin.push(user);

  return userToLogin && validateLogin(inputPassword, userToLogin[0]);
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
