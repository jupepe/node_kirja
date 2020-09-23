//08b-mongo-client-v1-js
const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/demos'

// create new devices collection and add some data into it
// Uses async/await style to do it. 

const connectToMongo = async () => {
    return await mongoClient.connect(url, {
        useNewUrlParser   : true,
        useUnifiedTopology: true
    })
}

async function insertToDb() {
    let con

    try {
        con = await connectToMongo()
        const demoDb = con.db('nodedemos');

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

        let results = await collection.insertMany(devArr)
        console.log(results)
    } catch (err) {
        console.log(err);
    } finally {
        con.close();
    }
}


insertToDb()

