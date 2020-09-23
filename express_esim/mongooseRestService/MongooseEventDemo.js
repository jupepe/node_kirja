const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const events = require('./routes/events') // Routes is defined in here

/* config can support both URL encoding or JSON encoding
   assuming POST: name=ben&course=java            <-- URL encoding
   or       POST: {"name":"ben","course":"java"}  <-- JSON encoding
*/
const app = express()

// mongoose connection
mongoose.connect('mongodb://localhost/rooms', {
    useNewUrlParser   : true,
    useUnifiedTopology: true
})

app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use('/api', events)    // call to route middleware

module.exports = app

