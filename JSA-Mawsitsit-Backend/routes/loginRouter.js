const express = require('express');
const checkLogin = require('../services/checkLogin');

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  const { user_name: userName, password } = req.body;

  if (req.headers['content-type'] !== 'application/json') {
    res.status(415).json({
      message: 'Content-type must be application/json.',
    });
    return;
  }

  const checkMessage = checkLogin(userName, password);

  if (checkMessage === 'Login successful!') {
    res.status(200).json({
      user_id: 'id',
      checkMessage,
    });
  } else {
    res.status(400).json({
      checkMessage,
    });
  }
});

module.exports = loginRouter;
