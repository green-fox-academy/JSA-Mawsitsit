// External Dependencies
const express = require('express');

// Internal Dependencies
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const personalDetailsRouter = require('./routes/personalDetailsRouter');
const authMiddleware = require('./middleware/auth');
const { sendEmailRouter } = require('./routes/emailVerificationRouter');
const { verificationLinkRouter } = require('./routes/emailVerificationRouter');

// Local Variables
const server = express();


server.use(express.json());
server.use('/register', registerRouter);
server.use('/login', loginRouter);
server.use('/personalDetails', authMiddleware, personalDetailsRouter);
server.use('/sendEmail', authMiddleware, sendEmailRouter);
server.use('/verificationLink', verificationLinkRouter);

module.exports = server;
