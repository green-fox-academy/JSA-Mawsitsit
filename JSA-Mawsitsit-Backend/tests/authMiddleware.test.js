// External Dependencies
require('dotenv').config();
const jwt = require('jsonwebtoken');

// Internal Dependencies
const authMiddleware = require('../middleware/auth');

// Mock Functions
const mockToken = jwt.sign({ userId: 1 }, process.env.JWT_PRIVATE_KEY, { expiresIn: 60 });
const mockRequest = {
  body: {},
  headers: {},
};
const mockResponse = {
  json: jest.fn().mockReturnThis(),
  status: jest.fn().mockReturnThis(),
};
const mockNext = jest.fn();

describe('auth middleware', () => {
  it('auth without authorization header', () => {
    authMiddleware(mockRequest, mockResponse, mockNext);
    expect(mockResponse.status).toBeCalledWith(400);
    expect(mockResponse.json).toBeCalledWith({ error: 'It\'s a bad request. Please try again.' });
  });

  it('auth without bearer token authorization', () => {
    mockRequest.headers = { authorization: '' };
    authMiddleware(mockRequest, mockResponse, mockNext);
    expect(mockResponse.status).toBeCalledWith(400);
    expect(mockResponse.json).toBeCalledWith({ error: 'It\'s a bad request. Please try again.' });
  });

  it('auth with correct token', () => {
    mockRequest.headers = { authorization: `Bearer ${mockToken}` };
    authMiddleware(mockRequest, mockResponse, mockNext);
    expect(mockRequest.body.userId).toBe(1);
    expect(mockNext).toBeCalled();
  });

  it('auth with wrong token', () => {
    mockRequest.headers = { authorization: 'Bearer I\'m a great token.' };
    authMiddleware(mockRequest, mockResponse, mockNext);
    expect(mockResponse.status).toBeCalledWith(401);
    expect(mockResponse.json).toBeCalledWith({ error: 'Unauthorized request. Please try again.' });
  });
});
