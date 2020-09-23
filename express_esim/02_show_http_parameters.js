// // 02_show_htto_parameters.js
// http://localhost:3000/?name=jack&age=45

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    if (req.query.name) {
        res.send('name: ' + req.query.name + "<br>" +
            'age: ' + req.query.age)
    } else {
        res.send('no query parameters given! use: URL/?name=NAME&age=AGE')
    }
})

const server = app.listen(process.env.PORT || 3000, () => {

    const host = server.address().address
    const port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)
    console.log('Test it from Browser with name&age parameters!')
})



