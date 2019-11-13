require('dotenv').config();

const cors = require('cors');
const express = require('express');
const server = express();
const PORT = (process.env.PORT);

server.use(express.json());
server.use(cors());


server.listen(PORT);