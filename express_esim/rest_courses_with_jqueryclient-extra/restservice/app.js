const app = require('./RestServiceStudent') //Require our app

const server = app.listen(process.env.PORT || 3300, function () {
    console.log('Express server listening on port ' + server.address().port)
})