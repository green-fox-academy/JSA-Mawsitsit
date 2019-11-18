const express = require('express');
const registerRouter = require('./routes/registerRouter');
const server = express();

server.use(express.json());
server.use('/register', registerRouter);

module.exports = server;