const http = require('http'),
    url = require('url')

function show_root(url, req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Show root</h1>")
    res.write("<p>Root URL / (try create/ or edit/ also)</p>")
    res.end()
}

function show_create(url, req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("<h1>Create data</h1>")
    res.write("<p>Creating some data now...</p>")
    res.end()
}

function show_edit(url, req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("<h1>Editing data</h1>")
    res.write("<p>Editing some data now...</p>")
    res.end()
}

function show_not_found(url, req, res) {
    res.writeHead(404, {'Content-Type': 'text/html'})
    res.write("<h1>404 Not Found</h1>")
    res.end("This page not found: " + url)
}

http.createServer(function (req, res) {
    const pathname = url.parse(req.url).pathname

    switch (pathname) {
        case '/':
            show_root(pathname, req, res)
            break
        case '/create':
            show_create(pathname, req, res)
            break
        case '/edit':
            show_edit(pathname, req, res)
            break
        default:
            show_not_found(pathname, req, res)
    }
}).listen(8888)

console.log('Server running at http://127.0.0.1:8888/')