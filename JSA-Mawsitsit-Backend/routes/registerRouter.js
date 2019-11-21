const express = require('express');
const {
  validatePassword,
  validateEmail,
  validatePhoneNumber,
} = require('../helper/validation');

const registerRouter = express.Router();

registerRouter.post('/', (req, res) => {
  const { email, phone_number: phoneNumber, password } = req.body;

  if (req.headers['content-type'] !== 'application/json') {
    res.status(415).json({
      message: 'Content-type must be application/json.',
    });
    return;
  }

  let errorMessage = '';
  if (!validateEmail(email)) {
    errorMessage = 'Error in email.';
  } else if (!validatePhoneNumber(phoneNumber)) {
    errorMessage = 'Error in phone number.';
  } else if (!validatePassword(password)) {
    errorMessage = 'Error in password.';
  }

  if (errorMessage) {
    res.status(400).json({
      errorMessage,
    });
    return;
  }

  res.status(200).json({
    user_id: 'id',
    email,
  });
});

module.exports = registerRouter;
