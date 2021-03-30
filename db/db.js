const { MongoClient } = require('mongodb');
require('dotenv').config();

const password = process.env.PASSWORD;
const username = process.env.USERNAME;
const database = process.env.DATABASE;

const url = `mongodb+srv://${username}:${password}@chameleon.m2ojq.mongodb.net/${database}?retryWrites=true&w=majority`;

const connect = async () => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(database);  

    db.on('close', () => { process.stdout.write('lost connection'); });  
    db.on('reconnect', () => { process.stdout.write('reconnected'); });

    return db;
};

module.exports.connect = connect;