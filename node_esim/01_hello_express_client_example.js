// 01_hello_express_client_example.js

const http = require("http")

const options = {
    host: 'localhost',
    port: 3000,
    path: "/my/path"
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