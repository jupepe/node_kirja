//const mongodb = require('mongodb')
const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/demos'

// create new devices collection and add some data into it
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

            const devArr = []

            devArr.push({
                "device"      : "Webcam",
                "manufacturer": "Skalith",
                "purchaseDate": "23.06.2011",
                "price"       : 39
            })
            devArr.push({
                "device"      : "Monitor",
                "manufacturer": "Roodel",
                "purchaseDate": "26.04.2011",
                "price"       : 32
            })
            devArr.push({
                "device"      : "Network card",
                "manufacturer": "Twitterbeat",
                "purchaseDate": "17.05.2014",
                "price"       : 10
            })
            devArr.push({
                "device"      : "Digital camera",
                "manufacturer": "Trilith",
                "purchaseDate": "29.12.2013",
                "price"       : 21
            })
            devArr.push({
                "device"      : "Sound Card",
                "manufacturer": "Tagchat",
                "purchaseDate": "14.07.2012",
                "price"       : 75
            })

            collection.insertMany(devArr, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Inserted %d documents with "_id" %s',
                        result.length, result)
                }
                db.close()
            })
        }
    }
);

/* 

$ node 08-mongo-client-v1.js 
CONNECTED:  mongodb://localhost:27017/demos
Inserted NaN documents with "_id" {
  result: [Object],
  ops: [Array],
  insertedCount: 5,
  insertedIds: [Object]
}
*/

