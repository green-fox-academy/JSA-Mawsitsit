// External Dependencies
require('dotenv').config();
const personalRouter = require('express').Router();

// Internal Dependencies
const {
  sendPersonalData,
  updatePersonalData,
} = require('../services/personalDataService');

// Get endpoint to send personal details data
personalRouter.get('/', async (req, res) => {
  const { userId } = req.body;

  try {
    const personalDetailsResult = await sendPersonalData(userId);
    res.status(200).json(personalDetailsResult);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong, please try again later.' });
  }
});

// Put endpoint to update one personal detail data
personalRouter.put('/', async (req, res) => {
  const {
    updateProp,
    updateValue,
    userId,
  } = req.body;

  try {
    const updatedPersonalData = await updatePersonalData(userId, updateProp, updateValue);
    res.status(200).json({ updatedPersonalData });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = personalRouter;
