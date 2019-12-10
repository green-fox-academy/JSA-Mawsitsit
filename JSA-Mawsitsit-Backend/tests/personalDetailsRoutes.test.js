// External Dependencies
const request = require('supertest');
const jwt = require('jsonwebtoken');

// Internal Dependencies
const server = require('../server');

jest.mock('../services/dataService');

// Mock Functions
const mockToken = jwt.sign({ user_id: 1 }, process.env.JWT_PRIVATE_KEY, { expiresIn: 60 });


describe('personal details endpoint', () => {
  it('send personal details data', async () => {
    const res = await request(server)
      .get('/personalDetails')
      .set({ Authorization: `Bearer ${mockToken}` });
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
