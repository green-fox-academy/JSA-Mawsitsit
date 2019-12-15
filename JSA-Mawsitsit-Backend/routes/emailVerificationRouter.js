// External Dependencies
require('dotenv').config();
const sendEmailRouter = require('express').Router();
const verificationLinkRouter = require('express').Router();
const verificationCodeRouter = require('express').Router();
const fetch = require('node-fetch');

// Internal Dependencies
const authMiddleWare = require('../middleware/auth');
const { sendEmailToUser, verificationLink } = require('../services/dataService');

let securityCode = '';
// Endpoints which can verify emails to user
sendEmailRouter.post('/', authMiddleWare, async (req, res) => {
  const { userId } = req.body;
  const { email } = await sendEmailToUser(userId);
  const link = `http://localhost:3001/verificationLink?email=${email}`;
  const url = `https://script.google.com/macros/s/AKfycbzOZPYfyZuFjdKRT0EZO4zhp2RPlFka6riyiq9dvIYTkex-YjY/exec?userEmail=${email}&&link=${link}`;

  try {
    const response = await fetch(url);
    const obj = await response.json();
    securityCode = obj.code;

    res.status(200).send(obj);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong, please try again later.' });
  }
});


verificationLinkRouter.get('/', async (req, res) => {
  try {
    const { email } = req.query;
    await verificationLink(email);
    res.status(200).end();
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong, please try again later.' });
  }
});


verificationCodeRouter.post('/', async (req, res) => {
  const { code } = req.body;
  try {
    if (code === securityCode) {
      res.status(200).json({ verified: true });
    } else {
      res.status(401).json({ verified: false });
    }
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong, please try again later.' });
  }
});

module.exports = { sendEmailRouter, verificationLinkRouter, verificationCodeRouter };
