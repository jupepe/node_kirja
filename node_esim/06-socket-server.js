// usage: node 06-socket-server.js
const net = require('net')

const HOST = '127.0.0.1'
const PORT = 7200

// Create a server instance
// callback function given to net.createServer() becomes the event handler for the 'connection' event
net.createServer(function (sock) {
    console.log(
        'OPEN Connection to: ' + sock.remoteAddress + ':' + sock.remotePort)
    // 'data' event occurs when the client sent data to this server socket
    sock.on('data', function (data) {
        console.log(
            'DATA from ' + sock.remoteAddress + ' ' + sock.remotePort + ': ' + data)
        sock.write('Data sent from the client was "' + data + '"')

    })
    sock.on('close', function (data) {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort)
    })

}).listen(PORT, HOST)

console.log('Server listening on ' + HOST + ':' + PORT)