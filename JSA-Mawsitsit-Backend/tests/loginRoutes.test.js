const request = require('supertest');
const server = require('../server');

describe('Post Endpoints', () => {
  it('login with phone number', async () => {
    const res = await request(server)
      .post('/login')
      .send({
        user_identifier: '12345678',
        password: 'password1',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user_id');
    expect(res.body).toHaveProperty('checkMessage');
  });
});

describe('Post Endpoints', () => {
  it('login with phone number', async () => {
    const res = await request(server)
      .post('/login')
      .send({
        user_identifier: 'email2@email.com',
        password: 'password2',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user_id');
    expect(res.body).toHaveProperty('checkMessage');
  });
});

describe('login with wrong email', () => {
  it('should correct request body', async () => {
    const res = await request(server)
      .post('/login')
      .send({
        user_name: 'email',
        password: '123456789',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('checkMessage');
  });
});

describe('login with wrong phone number', () => {
  it('should correct request body', async () => {
    const res = await request(server)
      .post('/login')
      .send({
        user_name: '1234',
        password: '123456789',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('checkMessage');
  });
});

describe('login without password', () => {
  it('should correct request body', async () => {
    const res = await request(server)
      .post('/login')
      .send({
        user_name: 'email1@email.com',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('checkMessage');
  });
});

describe('Missing content-type', () => {
  it('content type should be "application/json" ', async () => {
    const res = await request(server)
      .post('/register')
      .set('content-type', 'img');
    expect(res.statusCode).toEqual(415);
    expect(res.body).toHaveProperty('message');
  });
});
