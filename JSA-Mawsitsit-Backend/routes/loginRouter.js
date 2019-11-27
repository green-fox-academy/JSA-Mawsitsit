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

  if (!password) return res.status(400).send({ error: 'Please fill in your password.' });
  if (!userIdentifier) return res.status(400).send({ error: 'Please fill in your username.' });

  const loginUserResult = await loginUser(userIdentifier, password);
  if (loginUserResult === false) res.status(500).send({ error: 'Internal server error.' });
  if (loginUserResult.errorMessage) {
    return res.status(400).send({ error: loginUserResult.errorMessage });
  }
  return res.status(200).send({ token: loginUserResult.successMessage });
});

module.exports = loginRouter;
