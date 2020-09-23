const http = require("http")

const onRequest = (request, response) => {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello NodeJS World</h1>");
    response.end();
    console.log("Response has been written.")
}

http.createServer(onRequest).listen(8888)

console.log("Server has started.")