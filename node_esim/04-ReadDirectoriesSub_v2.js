// usage: 04-ReadDirectoriesSub_v2.js
/* 
Give a list of directories and loop through all files in the directories 
*/

const fs = require('fs')
const path = require('path')

// Loops through the file list of all directories given as a array
const listDirectories = (pathArr, next) => {
    let counter = pathArr.length
    let dirData = []
    pathArr.forEach((directory) => {
        const fullPathname = path.join(__dirname, directory)
        listDirectory(fullPathname, (results) => {
            dirData.push(results)
            counter--
            if (counter <= 0) {
                //console.log("dirData" + dirData)
                next(dirData)
            }
        })
    })
}


// Returns directory File list
const listDirectory = (directory, next) => {
    fs.readdir(directory, (err, files) => {
        let counter = files.length
        let results = []
        files.forEach((filename) => {
            const fullPath = path.join(directory, filename)
            fs.readFile(fullPath, (err, data) => {
                console.log(fullPath)
                results.push({'filename': fullPath, 'data': data})
                counter--
                if (counter <= 0) {
                    next(results)
                }
            })
        })
    })
}

const printDirectories = (results) => {
    let i = 0
    results.forEach((curDir) => {
        curDir.forEach((f) => {
            i++
            const fname = fs.lstatSync(f.filename)
            if (fname.isFile())
                console.log(
                    i + ": " + JSON.stringify(f.filename) + " : " + "file")
            else if (fname.isDirectory())
                console.log(i + ": " + JSON.stringify(
                    f.filename) + " : " + "directory")
        })
    })
}

listDirectories(['.', 'files', '..'], (data) => {
    //console.log("listDirectories" + data)
    printDirectories(data)
})

