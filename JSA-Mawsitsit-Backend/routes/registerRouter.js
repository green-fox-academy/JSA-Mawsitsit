const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { email, phone_number: phoneNumber, password } = req.body;

  if (req.headers['content-type'] !== 'application/json') {
    res.status(415).json({
      message: 'Content-type must be application/json.',
    });
  }

  if (!email || !phoneNumber || !password) {
    let message = '';
    if (!email) {
      message += 'Missing email. ';
    }
    if (!phoneNumber) {
      message += 'Missing phone numbers. ';
    }
    if (!password) {
      message += 'Missing password. ';
    }
    res.status(400).json({
      message,
    });
    return;
  }

  res.status(200).json({
    user_id: 'id',
    email,
  });
});

module.exports = router;
