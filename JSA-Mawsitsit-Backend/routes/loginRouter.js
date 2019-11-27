// External Dependencies
const loginRouter = require('express').Router();

// Internal Dependencies
const { loginUser } = require('../services/dataService');

// POST endpoint to login a user
loginRouter.post('/', async (req, res) => {
  const {
    password,
    user_identifier: userIdentifier,
  } = req.body;

  if (req.headers['content-type'] !== 'application/json') {
    return res.status(415).send({ error: 'Content-type must be application/json.' });
  }

  if (!password) return res.status(400).send({ error: 'Please full in your password.' });
  if (!userIdentifier) return res.status(400).send({ error: 'Please full in your username.' });

  const loginUserMessage = await loginUser(userIdentifier, password);
  if (loginUserMessage !== `Welcome ${userIdentifier}!`) {
    if (loginUserMessage !== 'User doesn\' exit. Please check your username.'
      || loginUserMessage !== 'Password doesn\'t match. Please check your password.') {
      return res.status(400).send({ error: loginUserMessage });
    }
    return res.status(500).send({ error: loginUserMessage });
  }
  return res.status(200).send({ token: loginUserMessage });
});

module.exports = loginRouter;
