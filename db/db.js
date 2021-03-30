// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();

const password = process.env.PASSWORD;
const username = process.env.USERNAME;
const database = process.env.DATABASE;

const url = `mongodb+srv://${username}:${password}@chameleon.m2ojq.mongodb.net/${database}?retryWrites=true&w=majority`;


// const connect = async () => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;  

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.on('close', () => { process.stdout.write('lost connection'); });  
    db.on('reconnect', () => { process.stdout.write('reconnected'); });

    // return db;
// };

// module.exports.connect = connect;