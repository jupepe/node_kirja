const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const students = require('./routes/students') //routes are defined here

/* config can support both URL encoding or JSON encoding
   assuming POST: name=ben&course=java            <-- URL encoding
   or       POST: {"name":"ben","course":"java"}  <-- JSON encoding
*/

app.use(bodyParser.json())       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: false})) // to support URL-encoded bodies
app.use('/api', students)  // call to route middleware

module.exports = app

