const express = require('express');
const router = express.Router();

const { validateEmail } = require('../helper/validation');
const { validatePhoneNumber } = require('../helper/validation');
const { validatePassword } = require('../helper/validation');


router.post('/', (req, res) => {
  const { email, phone_number: phoneNumber, password } = req.body;

  if (req.headers['content-type'] !== 'application/json') {
    res.status(415).json({
      message: 'Content-type must be application/json.'
    });
    return;
  }

  let errorMessage = '';
  if(validateEmail(email)){
    errorMessage += 'Error in email. ';
  }
  if(validatePhoneNumber(phoneNumber)){
    errorMessage += 'Error in phone number. ';
  }
  if(validatePassword(password)){
    errorMessage += 'Error in phone password. ';
  }
  
  
  if(errorMessage.length > 0){ 
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

module.exports = router;
