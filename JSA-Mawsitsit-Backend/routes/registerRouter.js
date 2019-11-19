const express = require('express');
const router = express.Router();

let errorMessage = '';
const weakRegex = new RegExp('^((?=.[a-z])|(?=.[0-9])|(?=.*[A-Z]))(?=.{8,})');
const validateEmail = (email) => {
    if(!email || (email.indexOf('@') == -1)){
      if(errorMessage.indexOf('Error in email. ') == -1){
        errorMessage += 'Error in email. '
      }
      return false
    }
    return true
}
const validatePhoneNumber = (phoneNumber) => {
    if(!phoneNumber || (phoneNumber.length < 8)){
      if(errorMessage.indexOf('Error in phone number. ') == -1){
        errorMessage += 'Error in phone number. '
      }
      return false
    }
    return true
}
const validatePassword= (password) => {
    if(!password || (!weakRegex.test(password))){
      if(errorMessage.indexOf('Error in password. ') == -1){
        errorMessage += 'Error in password. '
      }
      return false
    }
    
    return true
}

router.post('/', (req, res) => {
  const { email, phone_number: phoneNumber, password } = req.body;

  if (req.headers['content-type'] !== 'application/json') {
    res.status(415).json({
      message: 'Content-type must be application/json.'
    });
    return;
  }

  validateEmail(email);
  validatePhoneNumber(phoneNumber);
  validatePassword(password);
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
