// Usage: $ node 05-event-emitting-client.js

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
}

const emitter = new MyEmitter();

emitter.on('connection', () => {
    console.log('connected.')
    // Emitting other events
    emitter.emit('data', 'someData')
    emitter.emit('more_data', 'testData')
})

emitter.on('data', d => {
    setTimeout(function () { // wait 100 ms before running
        console.log('data received: ' + d)
    }, 100)
})

emitter.on('more_data', d => {
    setTimeout(function () { // wait 50 ms before running
        console.log('more data: ' + d)
    }, 50)
})

emitter.emit('connection') // Fire the connection event 

console.log("Program Ended.")
