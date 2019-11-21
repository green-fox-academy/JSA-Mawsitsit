const request = require('supertest');
const server = require('../server');

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(server)
      .post('/login')
      .send({
        user_name: '12345678',
        password: '12345678',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user_id');
    expect(res.body).toHaveProperty('checkMessage');
  });
});

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(server)
      .post('/login')
      .send({
        user_name: 'email2@email.com',
        password: '87654321',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user_id');
    expect(res.body).toHaveProperty('checkMessage');
  });
});

describe('Error from request body', () => {
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

describe('Missing content-type', () => {
  it('content type should be "application/json" ', async () => {
    const res = await request(server)
      .post('/register')
      .set('content-type', 'img');
    expect(res.statusCode).toEqual(415);
    expect(res.body).toHaveProperty('message');
  });
});
