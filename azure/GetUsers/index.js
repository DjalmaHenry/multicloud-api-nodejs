const { MongoClient } = require('mongodb');

module.exports = async function (context, req) {
    const client = new MongoClient(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();
        const database = await client.db(process.env.MONGODB_DATABASE);
        const collection = await database.collection(process.env.MONGODB_COLLECTION);
        const data = await collection.find({}).toArray();

        await client.close();

        context.res = {
            "headers": {
                "content-type": "application/json"
            },
            "body": data
        };
    } catch (err) {
        console.error(err);
        context.res = {
            "status": 500,
            "headers": {
                "content-type": "application/json"
            },
            "body": {
                "message": err.toString(),
            }
        };
    }
}
