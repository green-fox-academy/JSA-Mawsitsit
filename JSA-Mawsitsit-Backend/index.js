require('dotenv').config();
const PORT  = process.env.PORT;
const server = require('./server')

server.listen(PORT, () => { console.log(`server started on port ${PORT}`); });