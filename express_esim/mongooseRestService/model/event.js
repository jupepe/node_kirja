const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create a schema for events
const eventSchema = new Schema({
    name    : String,
    location: String,
    evdate  : Date,
})

// First create a model using eventSchema
let Event = mongoose.model('Event', eventSchema)

module.exports = Event