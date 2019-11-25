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
  return loginUserMessage !== `Welcome ${userIdentifier}!`
    ? res.status(400).send({ error: loginUserMessage })
    : res.status(200).send({ token: loginUserMessage });
});

module.exports = loginRouter;
