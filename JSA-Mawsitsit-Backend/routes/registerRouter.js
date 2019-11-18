const express = require('express');
const router = express.Router();

const passwordStrength = (password) => {
  const weakRegex = new RegExp('^((?=.[a-z])|(?=.[0-9])|(?=.*[A-Z]))(?=.{8,})');
  if (weakRegex.test(password)) {
    return 1;
  }
  return 0;
};

router.post('/', (req, res) => {
  const { email, phone_number: phoneNumber, password } = req.body;

  if (req.headers['content-type'] !== 'application/json') {
    res.status(415).json({
      message: 'Content-type must be application/json.',
    });
    return;
  }

  if (!email || !phoneNumber || !password) {
    let message = '';

    if (!email) {
      message += 'Missing email. ';
    }else if (str.indexOf(email) == -1) {
      message += 'Incorrect email format. ';
    }

    if (!phoneNumber) {
      message += 'Missing phone numbers. ';
    }else if(phoneNumber.length < 8){
      message += 'Too short phone numbers. ';
    }

    if (!password) {
      message += 'Missing password. ';
    }else if(passwordStrength(email) === 0){
      message += 'Too weak password. ';
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
