// Usage: node 01-web-server-v2.js

const http = require('http')

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<h1>Hello NodeJs World</h1>\n')
    res.end()
})

// server listening at port 8888
server.listen(8888, '127.0.0.1')

console.log('Server running at http://127.0.0.1:8888/')
