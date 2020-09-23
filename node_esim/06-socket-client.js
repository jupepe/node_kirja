// usage: node 06-socket-client.js
const net = require('net')

const HOST = '127.0.0.1'
const PORT = 7200

const client = new net.Socket()
client.connect(PORT, HOST, function () {
    console.log('CONNECTED: ', HOST)
    console.log('Connection opened to: ' + HOST + ':' + PORT)
    client.write("Hey! I'm your client!")
    //client.write("Another information!")
})

// 'data' event happens when the server sent data to this client socket
client.on('data', function (data) {
    console.log('DATA: ' + data)
    client.destroy() // Close the client socket
})

client.on('close', function () {
    console.log('Connection closed')
})

client.on('error', function (ex) {
    console.log("ERROR")
    console.log(ex)
})