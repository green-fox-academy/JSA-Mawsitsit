// External Dependencies
require('dotenv').config();
const loginRouter = require('express').Router();
const jwt = require('jsonwebtoken');

// Internal Dependencies
const { loginUser } = require('../services/dataService');

// POST endpoint to login a user
loginRouter.post('/', async (req, res) => {
  const {
    password,
    user_identifier: userIdentifier,
  } = req.body;

  if (req.headers['content-type'] !== 'application/json') {
    return res.status(415).json({ error: 'Content-type must be application/json.' });
  }

  if (!password) return res.status(400).json({ error: 'Please fill in your password.' });
  if (!userIdentifier) return res.status(400).json({ error: 'Please fill in your username.' });

  const loginUserResult = await loginUser(userIdentifier, password);
  if (loginUserResult === false) res.status(500).json({ error: 'Internal server error.' });
  if (loginUserResult.errorMessage) {
    return res.status(400).json({ error: loginUserResult.errorMessage });
  }
  const { userId } = loginUserResult;
  jwt.sign({ userId }, process.env.JWT_PRIVATE_KEY, (error, token) => {
    if (error) return res.status(500).json({ error: error.toString().split(': ')[1] });
    return res.status(200).json({ auth: true, token });
  });
  return true;
});

module.exports = loginRouter;
