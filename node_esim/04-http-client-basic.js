// Usage: 04-http-client-basic.js

let http = require('http');

url =
    "http://echo.jsontest.com/key/value/show/data/format/json/type/testapp"

http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        console.log(data);
    });
});

