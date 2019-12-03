// External Dependencies
require('dotenv').config();
const personalDetailsRouter = require('express').Router();

// Internal Dependencies
const { sendUserDetailData } = require('../services/dataService');

// POST endpoint to send personal details data
personalDetailsRouter.get('/', async (req, res) => {
  const { userId } = req.body;
  const personalDetailsResult = await sendUserDetailData(userId);
  console.log();

  res.status(200).send(personalDetailsResult);
});

module.exports = personalDetailsRouter;
