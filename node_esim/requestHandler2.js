// requestHandler2.js 

const exec = require("child_process").exec

const list = (response) => {
    console.log("list handler.")
    exec("ls -la", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write("<h1>ls -la</h1>")
        response.write("<pre>" + stdout + "</pre>")
        response.end()
    })
}

const process = (response) => {
    console.log("process list handler.")
    exec("ps -aux", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write("<h1>ps -ax</h1>")
        response.write("<pre>" + stdout + "</pre>")
        response.end()
    })
}


const show = (response) => {
    console.log("show handler.")
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write("<h1>Show some data</h1>")
    response.end()
}

exports.list = list
exports.process = process
exports.show = show
