const Event = require('../model/event') // DataModel reference 
const express = require('express')
const router = express.Router()

const cors = require('cors') // CORS support 

router.use(cors()) // CORS allow Cross Origin requests for this server
// Now Router support CORS request for any client
// You can use CORS with router in this kind of application where router routes path to the right functions

module.exports = router

// "model" saving information of all events
// there is also module 'event' which handles all CRUD operations
// for the data
let events = []

router.route('/events')
    // get All events
    .get((req, res) => {

        Event.find({}, (err, list) => {
            if (err) throw err

            // object of all the users
            console.log(list)
            return res.json(list)
        })

    })

    // Create a new event
    .post((req, res) => {
        console.log("POST: " + req.body)

        if (!req.body.hasOwnProperty('name')) {
            res.nameCode = 400 // res.status(400) or res.statusCode = 400
            return res.json({message: 'Error 400: No name given'})
        }

        const newEvent = new Event({
            name    : req.body.name,
            location: req.body.location,
            evdate  : new Date()
        })
        console.log(newEvent)

        // save the event
        newEvent.save(err => {
            if (err) throw err
            console.log('Event created!')
        })


        return res.json({message: 'Event Added with name ' + req.body.name})
    })

    // Delete all events
    .delete((req, res) => {
        console.log("DELETE: " + req.body)

        Event.remove({}, err => {
            if (err) throw err
            // you can handle deletion errors also
        })

        return res.json({message: 'All events was Deleted!'})
    })


