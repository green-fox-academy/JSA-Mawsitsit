import {
  emailValidate,
  phoneNumberValidate,
  passwordValidate,
  passwordCheck,
  validateLoginPreference,
} from '../validation/validation';

describe('Validate email', () => {
  it('validate successful', () => {
    const email = 'email1@gmail.com';
    expect(emailValidate(email)).toBe('');
  });
  it('validate failed', () => {
    const email = '';
    expect(emailValidate(email)).toBe('E-mail is required');
  });
  it('validate failed', () => {
    const email = 'email1gmail.com';
    expect(emailValidate(email)).toBe('Not valid Email address');
  });
});

describe('Validate phone number', () => {
  it('validate successful', () => {
    const phoneNumber = '12345678';
    expect(phoneNumberValidate(phoneNumber)).toBe('');
  });
  it('validate failed', () => {
    const phoneNumber = '';
    expect(phoneNumberValidate(phoneNumber)).toBe('Phone number is required');
  });
  it('validate failed', () => {
    const phoneNumber = '12345';
    expect(phoneNumberValidate(phoneNumber)).toBe('Not valid phone number');
  });
});

describe('Validate password', () => {
  it('password strength is strong', () => {
    const password = 'PASSword123!@£';
    expect(passwordValidate(password)).toBe('Strong password');
  });
  it('password strength is medium', () => {
    const password = 'PASSword123';
    expect(passwordValidate(password)).toBe('Medium password');
  });
  it('password strength is weak', () => {
    const password = 'password';
    expect(passwordValidate(password)).toBe('Weak password');
  });
  it('password length not enough', () => {
    const password = 'pass';
    expect(passwordValidate(password)).toBe('Password must at least 8 characters!');
  });
});

describe('Check password', () => {
  it('password matched', () => {
    const password = 'PASSword123!@£';
    const passwordConfirm = 'PASSword123!@£';
    expect(passwordCheck(password, passwordConfirm)).toBe('');
  });
  it('password dont matched', () => {
    const password = 'PASSword123!@£';
    const passwordConfirm = 'PASSword123!';
    expect(passwordCheck(password, passwordConfirm)).toBe('Password has to match!');
  });
});

describe('Validate login preference', () => {
  it('return a preference object', () => {
    const loginInput = {
      userIdentifier: 'email1@gmail.com',
      password: 'password1',
      rmberUserIdentifier: true,
      rmberPassword: true,
    };
    expect(validateLoginPreference(loginInput))
      .toStrictEqual({
        autoLogin: true,
        rmberPassword: true,
        rmberUserIdentifier: true,
      });
  });
});
