module.exports = {
  up: `
    INSERT INTO user_detail (
      user_id,
      email,
      phone_number
    ) values
    (1, 'email1@gmail.com', '12345676'),
    (2, 'email2@gmail.com', '12345677'),
    (3, 'email3@gmail.com', '12345678'),
    (4, 'email4@gmail.com', '12345679'),
    (5, '381495212@qq.com', '13648671121');
  `,
  down: 'TRUNCATE user_detail;',
};
