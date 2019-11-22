const express = require('express');
const { validateRegister } = require('../services/validation');

const registerRouter = express.Router();

registerRouter.post('/', (req, res) => {
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

  res.status(200).json({
    user_id: 'id',
    email,
  });
});

module.exports = registerRouter;
