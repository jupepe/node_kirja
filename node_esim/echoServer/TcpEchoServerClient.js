const net = require('net')

const tcpClient = new net.Socket()

tcpClient.connect(2500, '127.0.0.1', () => {
    console.log('Client connects to the echo server')
    tcpClient.write('1st message from the client.')
})

// Data received from the server
tcpClient.on('data', (data) => {
    console.log('Getting data from the server: ' + data + "\n")
    tcpClient.destroy()
})

tcpClient.on('close', () => {
    console.log('Client\'s connection to the echo server is closed')
})
