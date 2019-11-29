const validation = require('../services/validation');

describe('Validate register', () => {
  it('validate successful', () => {
    const register = {
      email: 'email5@gmail.com',
      phone_number: '12345678',
      password: 'password5',
    };
    expect(validation.validateRegister(register)).toBe('');
  });

  it('get error in email', () => {
    const register = {
      email: 'email5',
      phone_number: '12345678',
      password: 'password5',
    };
    expect(validation.validateRegister(register)).toBe('Error in email.');
  });

  it('get error in phone number', () => {
    const register = {
      email: 'email5@gmail.com',
      phone_number: '1234567',
      password: 'password5',
    };
    expect(validation.validateRegister(register)).toBe('Error in phone number.');
  });

  it('get error in password', () => {
    const register = {
      email: 'email5@gmail.com',
      phone_number: '12345678',
      password: 'passw',
    };
    expect(validation.validateRegister(register)).toBe('Error in password.');
  });
});

describe('Validate login', () => {
  it('login successful', () => {
    const userToLogin = {
      email: 'email1@gmail.com',
      phone_number: '12345676',
      password: '$2a$10$XQnzHFZcA7D9w87KOxkVNeH7j9UMSjsBlC3qoUGKN0lJ7oAjW6Xl2',
    };
    expect(validation.validateLogin('password1', userToLogin)).toHaveProperty('userId');
    expect(validation.validateLogin('password1', userToLogin)).toHaveProperty('errorMessage');
    expect(validation.validateLogin('password1', userToLogin).errorMessage).toBe('');
  });

  it('don\'t have user to login', () => {
    const userToLogin = false;
    expect(validation.validateLogin('password1', userToLogin)).toHaveProperty('errorMessage');
    expect(validation.validateLogin('password1', userToLogin).errorMessage).toBe('User doesn\' exit. Please check your username.');
  });

  it('password don\'t match', () => {
    const userToLogin = {
      email: 'email1@gmail.com',
      phone_number: '12345676',
      password: '$2a$10$XQnzHFZcA7D9w87KOxkVNeH7j9UMSjsBlC3qoUGKN0lJ7oAjW6Xl2',
    };
    expect(validation.validateLogin('password', userToLogin)).toHaveProperty('errorMessage');
    expect(validation.validateLogin('password', userToLogin).errorMessage).toBe('Password doesn\'t match. Please check your password.');
  });
});
