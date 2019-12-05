module.exports = {
  up: `
    INSERT INTO user (email, phone_number, password) values
    ('email1@gmail.com', '12345676', '$2a$10$XQnzHFZcA7D9w87KOxkVNeH7j9UMSjsBlC3qoUGKN0lJ7oAjW6Xl2'),
    ('email2@gmail.com', '12345677', '$2a$10$XQnzHFZcA7D9w87KOxkVNeTZy9k72cnOFarzDXREh.eQfBBNJgDdW'),
    ('email3@gmail.com', '12345678', '$2a$10$XQnzHFZcA7D9w87KOxkVNeUrQP64dSRU4f.H.NUHBxqJaB9bsVYna'),
    ('email4@gmail.com', '12345679', '$2a$10$XQnzHFZcA7D9w87KOxkVNe1Ui0Z1b.o/.viG4MywNJ3XG9YNIDBc.'),
    ('381495212@qq.com', '13648671121', '$2a$10$5qtiIqaoj0k8sjz6GQU4PeBEZ6eV0G1YRU4GcBSPqaVILLZzp.Zlm');
  `,
  down: 'TRUNCATE user;',
};
