// mysqlQuery.js
const mysql = require('mysql');

// Setting MySQL connection details
const mydb = {
    host     : 'localhost',
    user     : 'root',
    pwd      : 'root66',
    database : 'nodedemo',
    bookTable: 'Book'
}

const connection = mysql.createConnection({
    host    : mydb.host,
    user    : mydb.user,
    password: mydb.pwd,
    database: mydb.database
});


connection.connect();

connection.query('SELECT * from ' + mydb.bookTable,
    function (err, rows, fields) {
        if (!err) {
            console.log('MySQL query results');
            console.log(JSON.stringify(rows));
            rows.forEach(function (row) {
                console.log(JSON.stringify(row));
            })

        } else
            console.log('Error in MySQL Query.' + err);
    });

connection.end();
