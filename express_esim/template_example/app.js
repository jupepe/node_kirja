// template_example\app.js
const express = require('express')
const app = express()

/* setting new view engine pug to use template pages */
app.set('view engine', 'pug')

const articles = [
    {
        "id"   : 1,
        "title": "NodeJs!",
        "text" : "NodeJs using JS as a server-side. Event based entirely."
    },
    {
        "id"   : 2,
        "title": "Express",
        "text" : "Express yourself with Node.js. Real web server apps are possible. "
    },
    {
        "id"   : 3,
        "title": "Mongoose",
        "text" : "Connect to Mongo database easily with Node.js!"
    },
    {
        "id"   : 4,
        "title": "Pug/Jada",
        "text" : "Nice template language used with Express and generating markup dynamically."
    }
]

app.get('/', (req, res) => {
    res.render('index', {title: 'Home', message: 'You are At home again!'})
})

app.get('/about', (req, res) => {
    res.render('index', {
        title  : 'About',
        message: 'Information about this page!'
    })
})

app.get('/test', (req, res) => {
    res.render('index', {
        title  : 'Test page',
        message: 'Some Random Information from the content creator!'
    })
})

app.get('/blog', (req, res) => {
    res.render('blog', {
        articles: articles,
        title   : 'Blog',
        message : 'Shows some blogs!'
    })
})

app.get('/includes', (req, res) => {
    res.render('includes')
})

app.listen(process.env.PORT || 3000)

