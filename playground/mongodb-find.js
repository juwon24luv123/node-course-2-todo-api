// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
       return console.log('Unable to connect to MoNgoDB server');
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a5699f57a1cafc6401edeab')
    // }).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // },(err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) =>{
    //     console.log(`Todos count: ${count}`);
    // },(err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('User').find().count().then((count) => {
    //     console.log(`User count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch user')
    // });

    // to find teachers names

    // db.collection('User').find({name: 'bankole'}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // });
    // db.close();
});