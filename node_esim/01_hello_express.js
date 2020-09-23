// 01_hello_express.js
const express = require('express')
const os = require("os")
const app = express()

app.get('/my/path', function (req, res) {
    const host = server.address().address
    const port = server.address().port
    const agent = req.headers['user-agent']
    const opsystem = os.hostname()
    const platform = os.platform()
    const osrelease = os.release()
    res.send(
        "Hello World! Express app running at http://" + host + "," + port +
        "<br>You are using " + agent + " using " + opsystem + " " + platform + " " + osrelease)
})

const server = app.listen(process.env.PORT || 3000, function () {

    const host = server.address().address
    const port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

})