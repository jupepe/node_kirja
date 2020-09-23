// Usage:  node 04-file-read.js FILENAME

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " FILE_TO_READ")
    process.exit(-1)
}
const filename = process.argv[2]

const fs = require('fs')

// asynchronous file reading
fs.readFile(filename, (err, buf) => {
    console.log("async file reading....\n" + buf.toString())
})

// synchronous file reading
const contents = fs.readFileSync(filename).toString()
console.log("synchronous file reading....\n" + contents)

const contents2 = fs.readFileSync(filename).toString()
console.log("synchronous file reading....\n" + contents2)
