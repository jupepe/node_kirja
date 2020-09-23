// 05_redirect_url_parameters.js
const express = require('express')

const flash = require('connect-flash') // req.flash() requires sessions
const session = require('express-session')

const app = express()

// Use the session because flash() requires it
app.use(session({
        secret: 'my-secret-007',
        cookie: {maxAge: 60000}
    })
)
app.use(flash())


app.get('/test', (req, res) => {
    req.flash('redirectedMessage', 'Message from URL named test')
    res.redirect('/')
})

app.get('/', (req, res) => {
    res.send("Flashed message: " + req.flash('redirectedMessage'))
})

// Any URL address can be redirected
app.get('/*', (req, res) => {
    req.flash('redirectedMessage', 'Message from URL named ' + req.url)
    res.redirect('/')
})

const server = app.listen(process.env.PORT || 3000, () => {
})

