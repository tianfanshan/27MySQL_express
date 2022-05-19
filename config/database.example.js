const mysql = require('mysql2');

const db = mysql.createConnection({
    host:'localhost',
    user:'you user',
    password:'you password',
    database:'the database_name'
})

db.connect();

module.exports = db;