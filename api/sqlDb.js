// sql
const mysql = require('mysql');

// open db connection
let connection = mysql.createConnection({
  host: process.env.LOCALHOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = connection;
