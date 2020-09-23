// router2.js 

exports.route = (handle, pathname, response) => {
    console.log("route a request for " + pathname)
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response) // response object given as a parameter
    } else {
        console.log("No request handler found for " + pathname)
        return "404 Not found"
    }
}
