// 04_body_parser.js
const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    // app.post('/', ... route receive result of this form
    const html = '<form action="/" method="post">' +
        'Enter your name:' +
        '<input type="text" name="userName" id="userName" placeholder="..." />' +
        'And your age:' +
        '<input type="age" name="age" id="age" placeholder="123" />' +
        '<br>' +
        '<button type="submit">Submit</button>\n</form>'

    res.send(html)
})

app.post('/', (req, res) => {
    const html = 'Hello: ' + req.body.userName + ". Your age is " + req.body.age
        + '.<br><a href="/">Try again.</a>'
    res.send(html)

    console.log(req.body) // Shows all text in query string URL
})


app.listen(process.env.PORT || 3000)