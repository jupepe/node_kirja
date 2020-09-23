// router/server.js
const express = require('express')
const app = express()

// we'll create our routes here

// get an instance of router
const router = express.Router()

// route middleware that will happen on every request
router.use((req, res, next) => {

    // log each request to the console
    console.log(req.method, req.url)

    // continue doing what we were doing and go to the route
    next()
})


// route middleware to validate :name
router.param('name', (req, res, next, name) => {
    // do validation on name parameter here

    // log something to know that param middleware is reacting to request
    console.log('skipping name validations on ' + name)

    // once validation is done save the new item in the req
    req.name = name
    // go to the next thing
    next()
})

// home page route ()
router.get('/', (req, res) => {
    res.send(
        'Home page!<br> Try also <b>/about</b> and <b>/person/:name</b> paths.')
})

// about page route (/about)
router.get('/about', (req, res) => {
    res.send('About page!')
})


// route with parameters (/person/:name)
router.get('/person/:name', (req, res) => {
    if (req.params.name === "juha")
        req.params.name += " - why you are still here coding?"

    res.send('person with name parameter: ' + req.params.name + '!')
})

// process the form (POST)
router.post((req, res) => {
    console.log('processing login')
    res.send('processing the login form!')
})

// apply the routes to our application
app.use('/', router)


const server = app.listen(process.env.PORT || 3000, () => {

    const host = server.address().address
    const port = server.address().port

    console.log('Router Example app listening at http://%s:%s', host, port)

})
