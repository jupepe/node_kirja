//13-httpserver-url-example.js

const server = require("./servermodule2")
const router = require("./router2")
const requestHandlers = require("./requestHandler2")

const handle = {}
handle["/"] = requestHandlers.list
handle["/process"] = requestHandlers.process
handle["/show"] = requestHandlers.show

server.startServer(router.route, handle)
