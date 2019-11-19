require('dotenv').config();
const migration = require('mysql-migrations');
const mysqlConnection = require('./database');

migration.init(mysqlConnection, `${__dirname}/migrations`);
