// External Dependencies
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Internal Dependencies
const {
  registerUser,
  checkIdentifier,
} = require('../services/dataService');
const { validateRegister } = require('../services/validation');

const registerRouter = express.Router();

registerRouter.post('/', async (req, res) => {
  if (req.headers['content-type'] !== 'application/json') {
    return res.status(415).json({ error: 'Content-type must be application/json.' });
  }

  const { email, phone_number: phoneNumber, password } = req.body;

  const errorMessage = validateRegister(req.body);
  if (errorMessage) return res.status(400).json({ error: errorMessage });

  try {
    const userExists = await checkIdentifier(req.body);
    if (userExists) return res.status(409).json({ error: 'User already exists. Please try a different username.' });

    // Password hashing
    const saltUsedToHash = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, saltUsedToHash);
    const userToRegister = {
      email,
      phoneNumber,
      password: hashedPassword,
    };

    const userId = await registerUser(userToRegister);
    jwt.sign({ user_id: userId }, process.env.JWT_PRIVATE_KEY, (error, token) => {
      if (error) return res.status(500).json({ error: error.toString().split(': ')[1] });
      return res.status(200).json({ token });
    });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong, please try again later.' });
  }
  return true;
});

module.exports = registerRouter;
