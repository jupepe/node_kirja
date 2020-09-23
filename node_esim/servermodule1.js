// servermodule1.js
// Server as it's own module

const http = require("http")

const onRequest = (request, response) => {
    console.log("Request received.")
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write("<h1>Hello NodeJS World</h1>")
    response.end()
    console.log("Response has been written.")
}

const start = () => {
    http.createServer(onRequest).listen(8888)
    console.log("Server has started.")
}

exports.startService = start
