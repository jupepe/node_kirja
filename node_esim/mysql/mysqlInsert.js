// mysqlInsert.js
const mysql = require('mysql');

/* 
 INSERT some new book data to mysql database.
 Then show inserted data by select query.
 DELETE inserted data from the database.
*/

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

// Create database connection
connection.connect();

const insertData = {
    "bid"    : 6,
    "name"   : "Node.js in Action",
    "price"  : 44.99,
    "authors": "Mike Cantelon, Marc Harter"
}

// Insert data into the database
const query = connection.query('INSERT INTO ' + mydb.bookTable + ' SET ?',
    insertData,
    (err, result) => {
        if (!err)
            console.log("data inserted succesfully. ")
        else
            console.log(err)
    }
);
console.log(query.sql);

connection.query('SELECT * from ' + mydb.bookTable,
    (err, rows, fields) => {
        if (!err) {
            console.log('MySQL query results');
            console.log(JSON.stringify(rows));
        }
    }
);

// Delete some data from the database
// const deleteQuery = connection.query(
//     'DELETE FROM ' + mydb.bookTable + ' WHERE id > 5',
//     (err, result) => {
//         if (!err)
//             console.log("data deleted succesfully. ")
//     }
// );

connection.end();
