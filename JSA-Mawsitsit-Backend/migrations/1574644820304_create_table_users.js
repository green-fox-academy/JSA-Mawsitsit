module.exports = {
  up: 'INSERT INTO users (id, email, phone_number, password) values (1, email1@gmail.com, 12345678, password1), (2, email2@gmail.com, 12345678, password2),(3, email3@gmail.com, 12345678, password3),(4, email4@gmail.com, 12345678, password4);',
  down: 'DELETE FROM users;',
};
