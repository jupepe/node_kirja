// usage: 04-ReadDirectories_v1.js
const fs = require('fs')

/* 
Reads all files from the current directory and
outputs the content of the files in the current directory
*/

const path = require('path')
const directory = "."

const pathname = path.join(__dirname, directory)

fs.readdir(pathname, (err, files) => {
    let results = []
    let counter = files.length

    files.forEach((filename) => {
        const fullPath = path.join(pathname, filename)
        fs.readFile(fullPath, (err, data) => {
            console.log(fullPath)
            results.push({'filename': fullPath, 'data': data})
            counter--
            if (counter <= 0) {
                console.log("All files in the directory has now been read.")
                printFiles(results)
            }
        })
    })
})

const printFiles = (results) => {
    let i = 0
    console.log("JSON " + JSON.stringify(results))
    results.forEach((r) => {
        i++
        console.log(i + ": " + r.filename + " " + r.data)
    })
}