// External Dependencies
const request = require('supertest');

// Internal Dependencies
const server = require('../server');

jest.mock('../services/dataService');

describe('login user endpoint', () => {
  it('login user with email', async () => {
    const res = await request(server)
      .post('/login')
      .send({
        user_identifier: 'email1@gmail.com',
        password: 'password1',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
    expect(res.body.token).toBe('Welcome!!!');
  });

  it('login user with phone number', async () => {
    const res = await request(server)
      .post('/login')
      .send({
        user_identifier: '12345677',
        password: 'password2',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
    expect(res.body.token).toBe('Welcome!!!');
  });

  it('login user with wrong email', async () => {
    const res = await request(server)
      .post('/login')
      .send({
        user_identifier: 'email1@email.com',
        password: 'password1',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toBe('User doesn\' exit. Please check your username.');
  });

  it('login user with wrong phone number', async () => {
    const res = await request(server)
      .post('/login')
      .send({
        user_identifier: '123456710',
        password: 'password1',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toBe('User doesn\' exit. Please check your username.');
  });

  it('login user without user identifier', async () => {
    const res = await request(server)
      .post('/login')
      .send({
        password: 'password1',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toBe('Please fill in your username.');
  });

  it('login user without password', async () => {
    const res = await request(server)
      .post('/login')
      .send({
        user_name: 'email1@gmail.com',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toBe('Please fill in your password.');
  });

  it('content type should be "application/json" ', async () => {
    const res = await request(server)
      .post('/login')
      .set('content-type', 'octet-stream');
    expect(res.statusCode).toEqual(415);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toBe('Content-type must be application/json.');
  });
});
