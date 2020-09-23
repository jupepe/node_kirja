// Usage:  node 04-file-read-callbacks.js FILENAME

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " FILE_TO_READ")
    process.exit(-1)
}
const filename = process.argv[2]

const fs = require('fs')
let data = undefined

fs.readFile(filename, (err, fileContents) => {
    data = fileContents
    console.log(data.toString())
})

console.log("End of file:" + data) // logs out undefined because line gets run before async file reading in readFile has been done