// MySQL database connections with connection pool
// http://localhost:3000/query?id=1
// Run create_mysql_tables_for_nodejs.sql to populate database before running this example.

const express = require('express')
const app = express()
//const os = require("mysql")
const url = require('url')
const mysql = require('mysql')

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

// Creating MySQL connection pool for the database
const connectionPool = mysql.createPool({
    connectionLimit: 100,
    host           : mydb.host,
    user           : mydb.user,
    password       : mydb.pwd,
    database       : mydb.database,
    debug          : false
})

// 
function getBook(connection, id, callback) {
    connection.query('SELECT * from ' + mydb.bookTable +
        ' WHERE ?', {id: id}, callback)
}

function doDatabaseQuery(req, res, id) {
    let results = "<br>"
    connectionPool.getConnection(function (err, connection) {
        // handle connection error
        if (err) {
            //connection.release()
            const errorCodes = {
                "code"  : 100,
                "status": "Error in db connection",
                "error" : err
            }
            res.send("MySQL error " + JSON.stringify(errorCodes))
            return
        }
        console.log('connected as id ' + connection.threadId)

        getBook(connection, id, function (err, rows) {
            console.log("select OK " + JSON.stringify(rows))
            if (rows.length > 0) {
                rows.forEach(function (row) {
                    results += JSON.stringify(row) + "<br>"
                })
                if (!err)
                    res.send(
                        "Query results with id " + id + "<br>" + results)
            } else {
                res.send("No results - 0 rows with id " + id)
            }
            connection.release()

        })

        // There is error in query
        connection.on('error', function (err) {
            console.log("Error" + err)
            const errorCodes = {
                "code"  : 100,
                "status": "Error in db connection",
                "error" : err
            }
            res.send("MySQL error " + JSON.stringify(errorCodes))
        })
    })
}


// redirect queries
app.get('/', function (req, res) {
    console.log('redirect query with url' + req.url)
    res.redirect(
        'http://localhost:' + server.address().port + '/query' + req.url)
})

app.get('/query', function (req, res) {
    const url_parts = url.parse(req.url, true)
    const query = url_parts.query
    const queryResults = doDatabaseQuery(req, res, query.id)
})

const server = app.listen(process.env.PORT || 3000, function () {
    console.log('MySQL client test')
})

