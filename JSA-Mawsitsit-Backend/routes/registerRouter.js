const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validateRegister } = require('../services/validation');
const { registerQuery, checkIdentifier } = require('../services/dataService');

const registerRouter = express.Router();

registerRouter.post('/', async (req, res) => {
  const { email, phone_number: phoneNumber, password } = req.body;

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
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const registerDetail = {
        email,
        phoneNumber,
        password: hash,
      };
      const userId = await registerQuery(registerDetail);
      jwt.sign({ user_id: userId }, process.env.PRIVATE_KEY, (error, token) => {
        if (error) return res.status(500).json({ error });
        return res.status(200).json({ token });
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong, please try again later.' });
  }
  return true;
});

module.exports = registerRouter;
