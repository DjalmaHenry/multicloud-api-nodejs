const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

const dbURI = process.env.DB;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

const users = [];

for (let i = 1; i <= 500; i++) {
    users.push({
        name: `user${i}`,
        email: `user${i}@example.com`,
        password: `password${i}`
    });
}

User.insertMany(users)
    .then(docs => {
        console.log('Users inserted successfully:', docs);
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error:', err);
        mongoose.connection.close();
    });
