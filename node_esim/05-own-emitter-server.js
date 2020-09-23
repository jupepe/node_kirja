// Usage: $ node 05-own-emitter-server.js

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
}

const newEmitter = new MyEmitter();

newEmitter.on('event', ev => {
    console.log(ev, this);
    if (ev === "JavaScript Seminar")
        console.log("JS Seminar in the Web at August!")
    else if (ev === "Node School")
        console.log("You wanna start a Full Node class?")
});

// emitting events
newEmitter.emit('event', 'JavaScript Seminar');
newEmitter.emit('event', 'Node School');