module.exports = {
  up: "INSERT INTO users (email, phone_number, password) values ('email1@gmail.com', '12345678', 'password1'), ('email2@gmail.com', '12345678', 'password2'),('email3@gmail.com', '12345678', 'password3'),('email4@gmail.com', '12345678', 'password4');",
  down: 'TRUNCATE users;',
};
