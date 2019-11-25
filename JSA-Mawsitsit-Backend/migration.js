require('dotenv').config();
const fs = require('fs');
const migration = require('mysql-migrations');
const { mysqlConnection } = require('./database');

if (!fs.existsSync(`${__dirname}/migrations`)) {
  fs.mkdirSync(`${__dirname}/migrations`);
}

migration.init(mysqlConnection, `${__dirname}/migrations`);
