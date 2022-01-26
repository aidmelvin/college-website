const { MongoClient } = require('mongodb');
const connect_to_db = require('../tools/connect-to-db')

// Connection URL
// const url = "mongodb+srv://Aidan:pqpojwemMFIOjwepiJPFMPEWlsd9i01340@user-data.hxarr.mongodb.net/User-Data?retryWrites=true&w=majority";
const url = "mongodb+srv://Aidan:ihooijearjiIOJFSIO834oiFJI0239IJFm@colleges.ku9sa.mongodb.net/Colleges?retryWrites=true&w=majority";
const client = new MongoClient(url);

// Database Name
const dbName = 'Colleges';

async function main() {

    let collection = await connect_to_db()
    let result = await collection.find({ state: 'afgarge' }).toArray()
    console.log(result)


    // Use connect method to connect to the server
    // await client.connect();
    // console.log('Connected successfully to server');
    // const db = client.db(dbName);
    // const collection = db.collection('all_colleges');

    // // this is code to Create entries:
    // let toInsert = [{ 
    //                     name: 'Norbit',
    //                     age: 26,
    //                     gender: 'm',
    //                     weight: 150,
    //                     spouse: 'Rasputia'
    //                 }]
    // const insertResult = await collection.insertMany(toInsert);
    // console.log('Inserted documents =>', insertResult);
    // if (insertResult.acknowledged == true && insertResult.insertedCount == toInsert.length) {
    //     console.log('successful insert')
    // }
    // else {
    //     console.log('something went wrong')
    // }

    // this is code to read all entries
    // const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);
    // find a document with a query filter
    // const filteredDocs = await collection.find({ state: 'Maryland' }).toArray();
    // console.log('Found documents filtered by { state: \'Maryland\' } =>', filteredDocs);

    // this is code to update an entry
    // const updateResult = await collection.updateOne({ name: 'Norbit' }, { $set: { spouse: 'Kate' } });
    // console.log('Updated documents =>', updateResult);

    // this is code to delete an entry
    // const deleteResult = await collection.deleteMany({ name: 'reee' }, {age: 2});
    // console.log('Deleted documents =>', deleteResult);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
