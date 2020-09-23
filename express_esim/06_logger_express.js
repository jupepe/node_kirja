// 06_logger_express.js
const express = require('express')
const app = express()

const fs = require('fs')
const morgan = require('morgan')

// write stream to a text file (a = append moodi)
const accessLogStream = fs.createWriteStream(__dirname + '/access.log',
    {flags: 'a'})
const logger = morgan('combined', {stream: accessLogStream})

// using morgan logger
app.use(logger)

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/test', (req, res) => {
    res.send('Test URL')
})

const server = app.listen(process.env.PORT || 3000, () => {

    const host = server.address().address
    const port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

})
