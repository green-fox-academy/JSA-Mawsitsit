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
const loginUser = async (userIdentifier, password) => {
  const loggedInUser = mockUsers.find((user) => userIdentifier === user[
    userIdentifier.includes('@') ? 'email' : 'phone_number'
  ]);

  if (!loggedInUser) return 'User doesn\' exit. Please check your username.';
  return password === loggedInUser.password
    ? `Welcome ${userIdentifier}!`
    : 'Password doesn\'t match. Please check your password.';
};

module.exports = { loginUser };
