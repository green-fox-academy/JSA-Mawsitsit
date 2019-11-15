require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const router = require('./routes/Router');

const { PORT } = process.env;
const server = express();
server.use(bodyParser.json());
server.use('/', router);

server.listen(PORT, () => { console.log(`server started on port ${PORT}`); });
