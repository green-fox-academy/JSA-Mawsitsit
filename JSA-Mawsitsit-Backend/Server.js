// External Dependencies
require('dotenv').config();
const express = require('express');

const server = express();
const { PORT } = process.env;

server.use(express.json());

server.listen(PORT, () => console.log(`server started on port ${PORT}`));
