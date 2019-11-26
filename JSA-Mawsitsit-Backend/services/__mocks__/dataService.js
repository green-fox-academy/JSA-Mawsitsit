const Users = [
  {
    email: 'email1@email.com',
    phone_number: '12345678',
    password: 'password1',
  },
  {
    email: 'email2@email.com',
    phone_number: '12345678',
    password: 'password2',
  },
  {
    email: 'email3@email.com',
    phone_number: '12345678',
    password: 'password3',
  },
  {
    email: 'email4@email.com',
    phone_number: '12345678',
    password: 'password4',
  },
];

const registerQuery = () => 5;

const checkIdentifier = (object) => {
  const { email, phone_number: phoneNumber } = object;
  const result = Users.find((user) => (
    email === user.email && phoneNumber === user.phone_number
  ));
  return Boolean(result);
};

module.exports = { registerQuery, checkIdentifier };
