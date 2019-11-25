module.exports = {
  up: "CREATE TABLE IF NOT EXISTS users (id INT(8) UNSIGNED PRIMARY KEY  NOT NULL AUTO_INCREMENT, email VARCHAR(50) COLLATE latin1_general_ci NOT NULL DEFAULT '', phone_number VARCHAR(50) COLLATE latin1_general_ci NOT NULL DEFAULT '', password VARCHAR(50) COLLATE latin1_general_ci NOT NULL DEFAULT '') ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;",
  down: 'DROP TABLE users;',
};
