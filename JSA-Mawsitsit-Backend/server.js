const express = require('express');
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const personalDetailsRouter = require('./routes/personalDetailsRouter');
const authMiddleware = require('./middleware/auth');

const server = express();


server.use(express.json());
server.use('/register', registerRouter);
server.use('/login', loginRouter);
server.use('/personalDetails', authMiddleware, personalDetailsRouter);

module.exports = server;
