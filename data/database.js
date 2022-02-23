const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'Localhost',
    database: 'blog',
    user: 'root',
    password: 'puneet5006'
});

module.exports = pool;