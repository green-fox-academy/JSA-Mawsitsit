require('dotenv').config();

const { PORT } = process.env;
const server = require('./server');

server.listen(PORT, () => {
  /* eslint-disable no-alert, no-console */
  console.log(`server started on port ${PORT}`);
});
