/* 
  Test HTTP server and it's GET/POST request/responses 
*/
const assert = require('assert')
const http = require('http')
const querystring = require('querystring')
const server = require('../modules/simpleServer')

const PORT = 9000

// Post data defination => 
const postData = querystring.stringify({
    'data' : 'some-json-data',
    'value': '42',
})
const postOptions = {
    host   : 'localhost',
    port   : '9000',
    path   : '/',
    method : 'POST',
    headers: {
        'Content-Type'  : 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
}

describe('HTTP server tests', () => {
    before(function () {
        console.log("start server to " + PORT)
        server.listen(PORT)
    })

    after(function () {
        console.log("Close server on " + PORT)
        server.close()
    })


    it('should return 200 to GET method', done => {
        http.get('http://localhost:' + PORT, res => {
            assert.equal(200, res.statusCode)
            //console.log(res)
            done()
        })
    })

    it('should return "Hello Unit tester!"', done => {
        http.get('http://localhost:' + PORT, res => {
            let fetchedData = ''

            res.on('data', chunk => {
                fetchedData += chunk
            })

            res.on('end', () => {
                assert.equal('Hello from GET method!\n', fetchedData)
                done()
            })
        })
    })

    it('should return data send with POST method', done => {
        const postReq = http.request(postOptions, res => {
            res.setEncoding('utf8')
            let fetchedData = ''

            res.on('data', chunk => {
                fetchedData += chunk
            })

            res.on('end', function () {
                assert.equal(postData, fetchedData)
                done()
            })
        })
        // post the data
        postReq.write(postData)
        postReq.end()

    })


})

