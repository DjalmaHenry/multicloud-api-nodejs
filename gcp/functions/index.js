const MongoClient = require('mongodb').MongoClient;
const functions = require('firebase-functions');

// CREATE USER
exports.createUser = functions.https.onRequest(async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    const client = new MongoClient(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();

        const collection = client.db('test').collection('users');
        await collection.insertOne({
            email: email,
            name: name,
            password: password,
        }, (err, _) => {
            if (err) throw err;
        });

        await client.close();

        res.send(true);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

// GET USERS
exports.getUsers = functions.https.onRequest(async (req, res) => {
    const client = new MongoClient(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();

        const collection = client.db('test').collection('users');
        const data = await collection.find().toArray();

        await client.close();

        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

// GET USER
exports.getUser = functions.https.onRequest(async (req, res) => {
    const email = req.query.email;

    const client = new MongoClient(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();

        const collection = client.db('test').collection('users');
        const data = await collection.findOne(
            { email: email }
        )

        await client.close();

        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});
