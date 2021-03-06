const request = require('supertest');
const server = require('../server');

jest.mock('../services/dataService');

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(server)
      .post('/register')
      .send({
        email: 'email5@gmail.com',
        phone_number: '12345678',
        password: 'password5',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('return email or phone number already exist', async () => {
    const res = await request(server)
      .post('/register')
      .send({
        email: 'email1@gmail.com',
        phone_number: '12345676',
        password: 'password1',
      });
    expect(res.statusCode).toEqual(409);
    expect(res.body).toHaveProperty('error');
  });

  it('return request body error', async () => {
    const res = await request(server)
      .post('/register')
      .send({
        email: 'email',
        phone_number: '123456789',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('return content type error" ', async () => {
    const res = await request(server)
      .post('/register')
      .set('content-type', 'img');
    expect(res.statusCode).toEqual(415);
    expect(res.body).toHaveProperty('error');
  });
});
