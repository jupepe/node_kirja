const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/nodedemos'

const queryMongo = (searchCriteria, sortCriteria, callbackShow) => {

    mongoClient.connect(url, {
            useNewUrlParser   : true,
            useUnifiedTopology: true
        },
        (err, db) => {
            if (err) {
                console.log('ERROR:', err)
            } else {
                console.log('CONNECTED: ', url)

                const demoDb = db.db('nodedemos')

                const collection = demoDb.collection('devices')

                collection.find(searchCriteria).sort(sortCriteria).toArray(
                    (err, result, showResult) => {
                        console.log("searchCriteria was: " + JSON.stringify(
                            searchCriteria))

                        if (err) {
                            console.log(err)
                        } else if (result.length) {
                            //console.log('Found from mongodb:', result)
                            callbackShow(result)
                        } else {
                            console.log(
                                'No document(s) found with defined "find" criteria!')
                        }
                        console.log()
                        db.close()
                    }
                )
            }
        }
    )

};

const showResult = data => {
    data.forEach(device => {
        console.log(
            device.device + ", " + device.manufacturer + ", " + device.purchaseDate + ", " + device.price)
    })
}

queryMongo({}, {}, showResult)
queryMongo({"price": {$lt: 30}}, {"price": 1}, showResult)
queryMongo({"price": {$gt: 30}}, {"price": -1}, showResult)

/*

$ node 08-mongo-client-v3.js 
CONNECTED:  mongodb://localhost:27017/nodedemos
searchCriteria was: {}
Webcam, Skalith, 23.06.2011, 39
Monitor, Roodel, 26.04.2011, 32
Network card, Twitterbeat, 17.05.2014, 10
Digital camera, Trilith, 29.12.2013, 21
Sound Card, Tagchat, 14.07.2012, 75

CONNECTED:  mongodb://localhost:27017/nodedemos
searchCriteria was: {"price":{"$lt":30}}
Network card, Twitterbeat, 17.05.2014, 10
Digital camera, Trilith, 29.12.2013, 21

CONNECTED:  mongodb://localhost:27017/nodedemos
searchCriteria was: {"price":{"$gt":30}}
Sound Card, Tagchat, 14.07.2012, 75
Webcam, Skalith, 23.06.2011, 39
Monitor, Roodel, 26.04.2011, 32
*/