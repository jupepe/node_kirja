// MongooseRestService/app.js
// REST Api implementation for saving events
// Using Mongo with mongoose to query and save data
const app = require('./MongooseEventDemo') //Require our app

const server = app.listen(process.env.PORT || 3300, () => {
    console.log('Express server listening on port ' + server.address().port)
})