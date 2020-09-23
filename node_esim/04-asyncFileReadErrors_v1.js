const fs = require("fs")

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " FILENAME")
    process.exit(-1)
}
const filename = process.argv[2]

// Using callback to read function (error-first callback)
// Improved error handling
fs.readFile(filename, (err, data) => {
    if (err) {
        // File "Not Found" error
        if (err.fileNotFound) {
            return this.sendErrorMessage('File Does not Exist')
        } else
            console.error(err)

    } else {
        console.log(data)
        console.log(data.toString())
    }
})

console.log("Program Ended")

  
