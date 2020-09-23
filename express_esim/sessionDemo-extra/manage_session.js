const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const app = express()

/* setting new view engine pug to use as a template engine from parsing template pages */
app.set('view engine', 'pug')

app.use(cookieParser())
app.use(session({
    secret           : 'messageStoredInSession',
    resave           : true,
    saveUninitialized: true,
    cookie           : {maxAge: 60000}
}))

app.use(bodyParser.urlencoded({extended: true}))

app.use(logger('dev')) // Logging info

/*
// calling next(err) anywhere in your Express application tells the Express framework to pass the error along until an error handling middleware of function can handle this error
app.use(function(err, req, res, next) {
  // to handle `next(err)` calls
})
*/

app.get('/', (req, res) => {
    if (!req.session.visitingCounter) req.session.visitingCounter = 1
    else req.session.visitingCounter++
    res.render('sessionForm', {
        sessionName   : req.session.name,
        sessionPage   : req.session.visitedPage,
        sessionVisited: req.session.visitingCounter
    })
    req.session.visitedPage = "GET / "
})

app.post('/', (req, res, next) => {
    if (req.body.name.length < 3)
        //return next(new Error('Name length should be 3 or more.'))
        return next(new Error('Name parameter was not set in the query.'))

    req.session.name = req.body.name
    req.session.visitedPage = "POST / "

    res.redirect('/')
})

// Delete the saved session
app.get('/sessiondelete', (req, res, next) => {
    req.session.visitedPage = "GET /sessiondelete"
    req.session.destroy(function (err) {
        if (err) {
            next(err)
        } else {
            res.redirect('/')
        }
    })
})

// Delete the saved session
app.get('/sessionshow', (req, res, next) => {
    req.session.visitedPage = "GET /sessionshow"
    res.redirect('/')
})


// Any URL address can be redirected to the base URL /
app.get('/*', (req, res) => {
    req.session.visitedPage = req.url
    throw new Error("URL does not exist in the app: " + req.url)
    // res.redirect('/')
})


// Note! The error handler has to be given to the app after the error has been thrown (or next). 
// If it is before, it will not catch the error at all.

// error handler: returns the error status (500, Internal Server Error), stack trace, and error message.
// Shows information in the error page.
app.use((err, req, res, next) => {
    console.log("ERROR: " + err)
    res.status(err.status || 500)
    res.render('error', {
        message: err.message,
        error  : err
    })
})

app.listen(process.env.PORT || 9000)