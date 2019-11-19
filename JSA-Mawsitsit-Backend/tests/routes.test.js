/* global it, describe, expect */
const request = require('supertest');
const server = require('../server');

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(server)
      .post('/register')
      .send({
        email: 'email@',
        phone_number: 123456789,
        password: 'password',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('email');
    expect(res.body).toHaveProperty('user_id');
  });
});

describe('Error from request body', () => {
  it('should correct request body', async () => {
    const res = await request(server)
      .post('/register')
      .send({
        email: 'email',
        phone_number: '123456789',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('errorMessage');
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
