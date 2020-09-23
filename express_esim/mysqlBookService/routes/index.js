const express = require('express');
const router = express.Router();

const bookdb = require('../bookdb');
bookdb.connect(); // connect to mysql db

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* GET all books from the database */
router.get('/books', function (req, res, next) {

    bookdb.getAllBooks(function (err, rows) {
        res.render('books', {books: rows});
    });

});

/* Show search form */
router.get('/searchform', function (req, res, next) {
    res.render('searchform');
});


/* GET a book from the database */
router.post('/book', function (req, res, next) {
    const name = req.body.searchname;

    bookdb.getBook(name, function (err, rows) {
        res.render('books', {books: rows});
    });

});

module.exports = router;
