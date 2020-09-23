const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/nodedemos'

// Connection to devices collection and delete all data from it
// await/async style used

// create new devices collection and add some data into it
// Uses async/await style to do it. 

const connectToMongo = async () => {
    return await mongoClient.connect(url, {
        useNewUrlParser   : true,
        useUnifiedTopology: true
    })
}

const deleteFromDb = async () => {
    let con

    try {
        con = await connectToMongo()
        const demoDb = con.db('nodedemos');

        const collection = demoDb.collection('devices')

        let results = await collection.deleteMany({})
    } catch (err) {
        console.log(err);
    } finally {
        con.close();
    }
};


deleteFromDb()

