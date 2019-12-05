// External Dependencies
require('dotenv').config();
const personalDetailsRouter = require('express').Router();

// Internal Dependencies
const { sendUserDetailData } = require('../services/dataService');

// Get endpoint to send personal details data
personalDetailsRouter.get('/', async (req, res) => {
  const { userId } = req.body;

  try {
    const personalDetailsResult = await sendUserDetailData(userId);
    res.status(200).send(personalDetailsResult);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong, please try again later.' });
  }
});

module.exports = personalDetailsRouter;
