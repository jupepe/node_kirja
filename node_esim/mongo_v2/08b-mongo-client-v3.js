//08b-mongo-client-v3-js
const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/nodedemos'

const connectToMongo = async () => {
    return await mongoClient.connect(url, {
        useNewUrlParser   : true,
        useUnifiedTopology: true
    })
}

const queryMongo = async (searchCriteria, sortCriteria, callbackShow) => {
    let con
    try {
        con = await connectToMongo()
        const demoDb = con.db('nodedemos');

        const collection = await demoDb.collection('devices')

        const result = await collection.find(searchCriteria)
            .sort(sortCriteria).toArray()
        console.log("for searchCriteria " + JSON.stringify(
            searchCriteria) + " results are: ")
        callbackShow(result)

    } catch (err) {
        console.log(err);
    } finally {
        con.close();
    }
}


const showResult = data => {
    data.forEach(device => {
        console.log(
            " " + device.device + ", " + device.manufacturer + ", " + device.purchaseDate + ", " + device.price)
    })
}

queryMongo({}, {}, showResult)
queryMongo({"price": {$lt: 30}}, {"price": 1}, showResult)
queryMongo({"price": {$gt: 30}}, {"price": -1}, showResult)
queryMongo({"price": {$gt: 0}}, {"price": -1}, showResult)

