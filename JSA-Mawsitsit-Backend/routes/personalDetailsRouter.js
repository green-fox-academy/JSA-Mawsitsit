// External Dependencies
require('dotenv').config();
const personalDetailsRouter = require('express').Router();

// Internal Dependencies
const { sendUserDetailData } = require('../services/dataService');
const authMiddleware = require('../middleware/auth');

// POST endpoint to send personal details data
personalDetailsRouter.post('/', authMiddleware, async (req, res) => {
  const { userId } = req.body;
  const [personalDetailsResult] = await sendUserDetailData(userId);

  res.status(200).send(personalDetailsResult);
});

module.exports = personalDetailsRouter;
