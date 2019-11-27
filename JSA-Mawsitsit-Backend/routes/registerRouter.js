const express = require('express');
const { validateRegister } = require('../services/validation');
const { registerQuery, checkIdentifier } = require('../services/dataService');

const registerRouter = express.Router();

registerRouter.post('/', async (req, res) => {
  const { email } = req.body;
  if (req.headers['content-type'] !== 'application/json') {
    return res.status(415).json({ error: 'Content-type must be application/json.' });
  }

  const errorMessage = validateRegister(req.body);
  if (errorMessage) {
    return res.status(400).json({ error: errorMessage });
  }
  try {
    const identifierExists = await checkIdentifier(req.body);
    if (identifierExists) {
      res.status(409).json({ error: 'Email or phone number already exist.' });
    } else {
      const userId = await registerQuery(req.body);
      res.status(200).json({
        user_id: userId,
        email,
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong, please try again later.' });
  }
  return true;
});

module.exports = registerRouter;
