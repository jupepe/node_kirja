// Usage:  node 04-asyncFileReadRelativePath_v2.js RELATIVE_PATH FILENAME

// Read file from relative path given as a first parameter.

const fs = require("fs")
const path = require('path')

if (process.argv.length <= 3) {
    console.log("Usage: " + __filename + " RELATIVE_PATH FILENAME")
    process.exit(-1)
}

const directory = process.argv[2]
const filename = process.argv[3]

// Using callback to read function (error-first callback)
const pathname = path.join(__dirname, directory, filename)
console.log("Full pathname: " + pathname)

fs.readFile(pathname, (err, data) => {
    if (err) {
        if (err.fileNotFound) {
            return this.sendErrorMessage('File Does not Exist')
        } else
            console.error(err)

    } else {
        console.log(data)
        console.log(data.toString())
    }
})

console.log("The last line in the program")

  
