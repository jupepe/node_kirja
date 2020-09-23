// 11-http_client_example.js 

const url_path = process.argv[2]

const http = require("http")

const options = {
    host: 'localhost',
    port: 8888,
    path: url_path
};

http.get(options, function (res) {
    console.log("Status Code: " + res.statusCode);
    console.log('Headers: ' + JSON.stringify(res.headers));

    res.on("data", function (chunk) {
        console.log("Response data: " + chunk);
    });
}).on('error', function (e) {
    console.log("Error: " + e.message);
});