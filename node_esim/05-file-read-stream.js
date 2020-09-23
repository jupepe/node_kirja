// Usage: $node 05-file-read-stream.js
const fs = require("fs")
let data = ''
let counter = 0

const fileReadStrean = fs.createReadStream('utf-file.txt');
//const fileReadStrean = fs.createReadStream('eh-eh.txt');  // Error
fileReadStrean.setEncoding('UTF8');

fileReadStrean.on('open', fn => {
    console.log('File opened' + fn);
})


fileReadStrean.on('readable', () => {
    console.log('ready to read');
    this.read();
})

fileReadStrean.on('data', buff => {
    data += buff
    counter += 1
    console.log("Data: " + buff)
})

fileReadStrean.on('end', () => {
    console.log("End:" + data)
    console.log("Counter:" + counter)
})

fileReadStrean.on('error', err => {
    console.log("Error:" + err.stack)
})

console.log("Program Ended");