require('dotenv').config();
const migration = require('mysql-migrations');
const mysqlConnection = require('./Database');

migration.init(mysqlConnection, `${__dirname}/migrations`);
