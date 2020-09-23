const mysql = require('mysql')

// Setting MySQL connection details
const mydb = {
    host     : 'localhost',
    user     : 'root',
    pwd      : 'root66',
    database : 'nodedemo',
    bookTable: 'Book'
}

const state = {
    pool: null
}

const bookdb = {};

bookdb.connect = function () {
    state.pool = mysql.createPool({
        connectionLimit: 100,
        host           : mydb.host,
        user           : mydb.user,
        password       : mydb.pwd,
        database       : mydb.database,
        debug          : true
    });
    console.log('Connection created: ' + state);
    //done()
}

bookdb.get = function () {
    return state.pool
}

bookdb.getAllBooks = function (callback) {
    state.pool.getConnection(function (err, conn) {
        if (err)
            console.log("Connection error" + err);
        conn.query('SELECT * from ' + mydb.bookTable, callback);
    });
};


bookdb.getBook = function (searchName, callback) {
    state.pool.getConnection(function (err, conn) {
        if (err)
            console.log("Connection error" + err);
        conn.query('SELECT * from ' + mydb.bookTable + ' where name like ?',
            '%' + searchName + '%', callback);
    });
};

module.exports = bookdb;

