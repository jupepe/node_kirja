// node 08_basic_router.js
var express = require("express");
var app = express();

app.get("/", function(request, response) {
  response.end("The Home page!");
});

app.get("/save", function(request, response) {
  response.end("The Save page!");
});

app.get("/edit", function(request, response) {
  response.end("The edit page!");
});

app.get("*", function(request, response) {
  response.end("404!");
});

const server = app.listen(process.env.PORT || 3000, () => {

    const host = server.address().address
    const port = server.address().port

    console.log('app listening at http://%s:%s', host, port)

})
