const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'batch2411t5'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    }
    console.log('Connected to the database.');
    });