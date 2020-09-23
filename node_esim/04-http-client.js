// Usage:  node 04-http-client.js
const http = require('http')

const url = "http://echo.jsontest.com/key/value/show/data/format/json/type/testapp"

http.get(url, (response) => {
    response.setEncoding('utf8')
    response.on('data', function (data) {
        console.log("We have got a HTTP response:\n" + data)
    })
})

http.get(url, (response) => {
    let alldata = ""
    response.on('data', (data) => {
        // Continuously updating stream with the data
        alldata += data
    })
    response.on('end', () => {
        // now all data has been received
        // and we can parse JSON data
        const parsed = JSON.parse(alldata)
        const formatType = {
            format: parsed.format,
            type  : parsed.type
        }
        console.log("The file type and format:")
        console.log(formatType)
    })
})   



