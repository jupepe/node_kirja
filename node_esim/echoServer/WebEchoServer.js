const http = require('http');

/* 
  Creating Echo Web Server with no to allow connections to TCP port 3000.
  CORS support with 'Access-Control-Allow-Origin' : '*' header. 
*/

http.createServer((request, response) => {

    response.writeHead(200, {
        'Content-Type'               : 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });

    request.on('data', (message) => {
        console.log('request data received: ' + message)
        response.write('HTTP headers\n' + JSON.stringify(
            request.headers) + "\nmessage\n" + message);
    });

    request.on('end', () => {
        console.log('request end ')
        response.end();
    });

}).listen(3000);