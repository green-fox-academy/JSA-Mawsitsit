// External Dependencies
const request = require('supertest');
const authMiddleware = require('../middleware/auth');

// Internal Dependencies
const server = require('../server');

jest.mock('../services/dataService');

describe('personal details endpoint', () => {
  it('send personal details data', authMiddleware, async () => {
    const res = await request(server)
      .post('/personalDetails');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('user_id');
    expect(res.body).toHaveProperty('email');
    expect(res.body).toHaveProperty('phone_number');
    expect(res.body).toHaveProperty('last_name');
    expect(res.body).toHaveProperty('first_name');
    expect(res.body).toHaveProperty('address');
    expect(res.body).toHaveProperty('isEmailVerified');
    expect(res.body).toHaveProperty('isDetailsVerified');
  });
});
