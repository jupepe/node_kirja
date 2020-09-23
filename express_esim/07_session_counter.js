// 07_session_counters.js
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())
app.use(session({
    secret: 'messageStoredInSession',
    resave: true, saveUninitialized: true
}))

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    let result = '<form action="/" method="post">' +
        'Name: <input type="text" name="name"><br>' +
        '<button type="submit">Submit</button>' +
        '</form>'
    if (req.session.name) {
        result += '<br>Your name from session is: ' + req.session.name
        result += '<br>Last visited page is: ' + req.session.visitedPage
        result += '<br>Session counter: ' + req.session.formSubmitCounter
    }
    req.session.visitedPage = "/ GET"
    res.send(result)
})

app.post('/', (req, res) => {
    req.session.name = req.body.name
    req.session.visitedPage = "/ POST"
    if (!req.session.formSubmitCounter)
        req.session.formSubmitCounter = 0
    req.session.formSubmitCounter++

    res.redirect('/')
})

app.listen(process.env.PORT || 3000)