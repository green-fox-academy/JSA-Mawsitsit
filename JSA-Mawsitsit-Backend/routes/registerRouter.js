const express = require('express');
const { validateRegister } = require('../services/validation');
const { registerQuery, checkIdentifier } = require('../services/dataService');

const registerRouter = express.Router();

registerRouter.post('/', async (req, res) => {
  const { email } = req.body;
  if (req.headers['content-type'] !== 'application/json') {
    res.status(415).json({
      message: 'Content-type must be application/json.',
    });
    return;
  }

  const errorMessage = validateRegister(req.body);
  if (errorMessage) {
    res.status(400).json({
      errorMessage,
    });
    return;
  }

  const identifierExists = await checkIdentifier(req.body);
  if (identifierExists) {
    res.status(409).json({
      message: 'Email or phone number already exist.',
    });
  } else {
    try {
      const userId = await registerQuery(req.body);
      res.status(200).json({
        user_id: userId,
        email,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong, please try again later.',
      });
    }
  }
});

module.exports = registerRouter;
