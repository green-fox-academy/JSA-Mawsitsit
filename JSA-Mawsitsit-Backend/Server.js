require('dotenv').config();

const express = require('express');
const server = express();
const PORT = (process.env.PORT);

server.use(express.json());

server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})