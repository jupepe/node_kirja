const http = require('http')

this.httpServer = http.createServer(function (req, res) {
    console.dir(req.method)

    if (req.method == 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Hello from GET method!\n')
    }
    // handle also the POST request with pure Node server
    else if (req.method == 'POST') {
        console.log("POST")
        let fetchedData = ''

        req.on('data', (chunk) => {
            fetchedData += chunk
            console.log('chunk' + fetchedData)
        })

        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end(fetchedData)
        })

    }
})

// Exports methods from the module
// This must be defined as function() - not with lambda
exports.listen = function () {
    this.httpServer.listen.apply(this.httpServer, arguments)
}

exports.close = (callback) => {
    this.httpServer.close(callback)
}



