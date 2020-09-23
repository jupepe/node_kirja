// Usage: node 01-web-server.js
// Web server 

const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('Hello NodeJs World\n')
    res.end()
}).listen(8888, '127.0.0.1')

console.log('Server running at http://127.0.0.1:8888/')
