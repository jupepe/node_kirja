// Usage:  node 05-http-file-server.js 8888 00-hello-world.js
// 

const fs = require('fs')
const http = require('http')
const port = process.argv[2]
const file = process.argv[3]

http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    fs.createReadStream(file).pipe(res)
}).listen(port)
