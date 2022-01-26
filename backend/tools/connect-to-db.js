
// import {MongoClient} from 'mongodb'
const { MongoClient } = require('mongodb');
const mongodb_uri = require('./sensitive.json')

// Connection URL
// const url = "mongodb+srv://Aidan:ihooijearjiIOJFSIO834oiFJI0239IJFm@colleges.ku9sa.mongodb.net/Colleges?retryWrites=true&w=majority";
const url = mongodb_uri["mongodb-uri"]
const client = new MongoClient(url);

// Database Name
const dbName = 'Colleges';

async function connect_to_db() {
    
    await client.connect();
    
    const db = client.db(dbName);
    const collection = db.collection('all_colleges');
    
    return collection    
}

module.exports = connect_to_db

