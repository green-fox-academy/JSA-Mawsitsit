module.exports = {
  up: `
    CREATE TABLE IF NOT EXISTS user_detail (
      user_id INT(8) UNSIGNED NOT NULL,
      email VARCHAR(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
      phone_number VARCHAR(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
      last_name VARCHAR(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
      first_name VARCHAR(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
      address VARCHAR(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
      birthday VARCHAR(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
      isEmailVerified BOOL NOT NULL DEFAULT false,
      isDetailsVerified BOOL NOT NULL DEFAULT false
    ) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
  `,
  down: 'DROP TABLE user_detail;',
};
