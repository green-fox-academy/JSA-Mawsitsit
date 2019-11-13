const mysql = require('mysql');
const migration = require('mysql-migrations');

const connection = mysql.createPool({
    connectionLimit : 10,
    host:'localhost',
    user:'root',
    password:'password',
    database:'mawsitsit',
});

migration.init(connection, __dirname + '/migrations');

// console.log(__dirname);