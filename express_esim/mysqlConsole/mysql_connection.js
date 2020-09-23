// Create a MySQL connection 
// and query all data from the Book table
const express = require('express')
const app = express()
const mysql = require("mysql")

// Setting MySQL connection details
const mydb = {
    host     : 'localhost',
    user     : 'root',
    pwd      : 'root66',
    database : 'nodedemo',
    bookTable: 'Book'
}

// Setting Results from the database query
let result = {
    rows: ""
}

const connection = mysql.createConnection({
    host    : mydb.host,
    user    : mydb.user,
    password: mydb.pwd,
    database: mydb.database
})

connection.connect()

connection.query('SELECT * from ' + mydb.bookTable,
    (err, rows, fields) => {
        if (!err) {
            console.log('MySQL query results: ', rows)
            result.rows = rows
        } else
            console.log('Error in MySQL Query.')
    })

connection.end()

app.get('/', (req, res) => {
    let results = "<br>"
    result.rows.forEach(row =>
        results += JSON.stringify(row) + "<br>")
    res.send("MySQL results " + results)
})

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('MySQL client test')
})

