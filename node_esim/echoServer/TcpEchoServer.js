const net = require('net')

const server = net.createServer((socket) => {
    // Identify the client
    socket.name = socket.remoteAddress + ":" + socket.remotePort

    // Message from the client
    socket.on('data', (data) => {
        console.log(
            "Connection from " + socket.name + " " + socket.name + ": " + data)
        socket.write(socket.name + " " + data)
    })

    // Remove the client from the list when it leaves
    socket.on('end', () => {
        console.log(socket.name + " left the echo server.")
    })

})

server.listen(2500, '127.0.0.1')