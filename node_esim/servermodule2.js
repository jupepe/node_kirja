//servermodule2.js

const http = require("http")
const url = require("url")

function start(route, handle) {
    const onRequest = (request, response) => {
        const pathname = url.parse(request.url).pathname
        console.log("Request for " + pathname + "")
        route(handle, pathname, response)
    }

    http.createServer(onRequest).listen(8888)
    console.log("Server has started.")
}

exports.startServer = start
