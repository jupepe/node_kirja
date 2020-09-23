// rest_langcodes/app.js
const application_root = __dirname,
    express = require("express"),
    path = require("path"),
    url = require("url"),
    mongoose = require('mongoose')

const bodyParser = require('body-parser')

const app = express()
// config
app.use(bodyParser.urlencoded({extended: false}))

let lang = [
    {
        "code": "fi",
        "name": "Finnish",
    },
    {
        "code": "se",
        "name": "Swedish",
    },
    {
        "code": "en",
        "name": "English",
    },
    {
        "code": "no",
        "name": "Norwegian",
    },
    {
        "code": "da",
        "name": "Danish",
    }]


// Methods
// GET - return lista of languages
app.get('/', (req, res) => {
    let list = []
    for (let i in lang) {
        list.push(lang[i])
    }
    res.json(list)
})

// Read
app.get('/search', (req, res) => {
    console.log("search: " + req.query.code)

    if (req.query.code != undefined)
        for (let i = 0; i < lang.length; i++) {
            if (lang[i].code === req.query.code) {
                console.log(i + ":" + lang[i].code)
                res.json(lang[i])
                return
            }
        }
    res.nameCode = 404
    res.send('Error code 404: language ' + req.query.code + ' not found')
})

// Update value with POST and PUT
app.post('/update', (req, res) => {
    req.body = JSON.parse(JSON.stringify(req.body)) // hack
    if (!req.body.hasOwnProperty('code') && !req.body.hasOwnProperty(
        'name') && !req.body.hasOwnProperty('id')) {
        res.nameCode = 400
        return res.send('Error code 400: No code given.')
    }

    console.log("Update" + req.body)
    const id = req.body.id - 1
    lang[id] = {
        "code": req.body.code,
        "name": req.body.name,
        "id"  : req.body.id
    }
    res.json(lang[id])
})

app.put('/update', (req, res) => {
    req.body = JSON.parse(JSON.stringify(req.body)) // hack
    if (!req.body.hasOwnProperty('code') && !req.body.hasOwnProperty(
        'name') && !req.body.hasOwnProperty('id')) {
        res.nameCode = 400
        return res.send('Error code 400: No code given.')
    }

    console.log(req.body)
    const id = req.body.id - 1
    lang[id] = {
        "code": req.body.code,
        "name": req.body.name,
        "id"  : req.body.id
    }
    res.json(lang[id])
})


// add with POST
app.post('/add', (req, res) => {
    req.body = JSON.parse(JSON.stringify(req.body)) // hack
    if (!req.body.hasOwnProperty('code') && !req.body.hasOwnProperty(
        'name')) {
        res.nameCode = 400
        return res.send('Error code 400: No code & name given.')
    }

    const newItem = {code: req.body.code, name: req.body.name}
    lang.push(newItem)

    res.json(newItem)
})


app.get('/form', (req, res) => {
    // app.post('/', ... route receive result of this form
    const txt = '<form action="/add" method="post">' +
        'Code:' +
        '<input type="text" name="code" id="code" placeholder="..." />' +
        'Name:' +
        '<input type="text" name="name" id="name" placeholder="..." />' +
        '<br>' +
        '<button type="submit">Submit</button>' +
        '</form>'

    res.send(txt)
})

app.get('/form-update', (req, res) => {
    // app.post('/', ... route receive result of this form
    const txt = '<form action="/update" method="post">' +
        'Id:' +
        '<input type="text" name="id" id="id" placeholder="..." />' +
        'Code:' +
        '<input type="text" name="code" id="code" placeholder="..." />' +
        'Name:' +
        '<input type="text" name="name" id="name" placeholder="..." />' +
        '<br>' +
        '<button type="submit">Submit</button>' +
        '</form>'

    res.send(txt)
})


// Delete
app.delete('/remove/:code', (req, res) => {
    const scode = req.params.code
    console.log("Delete with code = " + scode)

    if (scode === "undefined") {
        res.nameCode = 404
        return res.send('Code of the language not set correctly')
    } else {
        for (let i = 0; i < lang.length; i++) {
            if (lang[i].hasOwnProperty('code') && lang[i].code === scode) {
                console.log("Deleted: " + i + ":" + lang[i].code)
                const removed = lang.splice(i, 1) 
                return res.json(removed)
            }
        }
    }
    res.send('Error code 404: language ' + scode + ' not found')

})

app.listen(process.env.PORT || 9000)

module.exports = app // for testing