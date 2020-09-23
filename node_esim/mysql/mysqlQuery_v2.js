// mysqlQuery_v2.js
const mydb = {
    host     : 'localhost',
    user     : 'root',
    pwd      : 'root66',
    database : 'nodedemo',
    bookTable: 'Book'
}


// The mysql2 package is compatible with mysql package. It support also for promises. 
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host              : mydb.host,
    user              : mydb.user,
    password          : mydb.pwd,
    database          : mydb.database,
    waitForConnections: true,
    connectionLimit   : 10,
    queueLimit        : 0
});

const mysqlQueries = async () => {

    try {

        const [rows, cols] = await connection.query(
            'SELECT * from ' + mydb.bookTable)
        console.log(rows)

    } catch (err) {
        console.log(err);
    } finally {
        connection.end();
    }
}

mysqlQueries()