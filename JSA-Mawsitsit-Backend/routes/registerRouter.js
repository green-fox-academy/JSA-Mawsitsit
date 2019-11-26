const express = require('express');
const { validateRegister } = require('../services/validation');
const { registerQuery, checkIdentifier } = require('../services/dataService');

const registerRouter = express.Router();

registerRouter.post('/', async (req, res) => {
  const { email } = req.body;
  if (req.headers['content-type'] !== 'application/json') {
    res.status(415).send({
      message: 'Content-type must be application/json.',
    });
    return;
  }

  const errorMessage = validateRegister(req.body);
  if (errorMessage) {
    res.status(400).send({
      errorMessage,
    });
    return;
  }

  const identifierExists = await checkIdentifier(req.body);
  if (identifierExists) {
    res.status(409).send({
      message: 'Email or phone number already exist.',
    });
  } else {
    try {
      const userId = await registerQuery(req.body);
      res.status(200).send({
        user_id: userId,
        email,
      });
    } catch (error) {
      res.status(500).send({
        message: 'Something went wrong, please try again later.',
      });
    }
  }
});

module.exports = registerRouter;
