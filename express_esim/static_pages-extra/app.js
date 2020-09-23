const express = require('express')
const app = express()

/* building routes between different pages */

app.get('/', (req, res) => {
    res.sendfile('./views/index.html')
})

app.get('/about', (req, res) => {
    res.sendfile('./views/about.html')
})

app.get('/test', (req, res) => {
    res.sendfile('./views/test.html')
})

// note res.sendfile is deprecated function
// use res.sendFile - in that function path must be absolute 

app.listen(process.env.PORT || 3000)

