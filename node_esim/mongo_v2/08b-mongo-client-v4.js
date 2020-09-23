//08b-mongo-client-v4-js
// Uses async for update and find

const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/nodedemos'

const connectToMongo = async () => {
    return await mongoClient.connect(url, {
        useNewUrlParser   : true,
        useUnifiedTopology: true
    })
}

const updateAndFind = async () => {
    let con
    try {
        con = await connectToMongo()
        const demoDb = con.db('nodedemos');

        const collection = await demoDb.collection('devices')

        // Update data in the database
        const updated = await collection.updateOne({device: "Webcam"}, {
            '$set': {
                purchaseDate: "02.11.2019",
                price       : 44.5,
                manufacturer: 'HP'
            }
        })
        // Find updated data from the database
        const found = await collection.findOne({device: "Webcam"})

        console.log(found)

    } catch (err) {
        console.log(err);
    } finally {
        con.close();  // Always try to close connection!!!!!!
    }
}

const printResult = device => {
    console.log(
        device.device + ", " + device.manufacturer + ", " + device.purchaseDate + ", " + device.price);
}

updateAndFind()