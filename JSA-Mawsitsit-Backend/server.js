const express = require('express');
const cors = require('cors');
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');

const server = express();

server.use(cors());
server.use(express.json());
server.use('/register', registerRouter);
server.use('/login', loginRouter);

module.exports = server;
