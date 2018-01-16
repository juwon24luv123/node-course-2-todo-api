// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


// var user = {name: 'bankole', age: 24};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
       return console.log('Unable to connect to MoNgoDB server');
    }
    console.log('connected to MongoDB server');


    // db.collection('User').insertMany([
    //     {name: 'idowu',
    //         age: 24,
    //         occupation: 'english teacher',
    //         location: 'Akure'},

    //         {name: 'ayo',
    //         age: 24,
    //         occupation: 'english teacher',
    //         location: 'Akure'},

    //         {name: 'nike',
    //         age: 24,
    //         occupation: 'english teacher',
    //         location: 'Akure'},

    //         {name: 'bayo',
    //         age: 24,
    //         occupation: 'english teacher',
    //         location: 'Akure'},

    //         {name: 'bola',
    //         age: 24,
    //         occupation: 'english teacher',
    //         location: 'Akure'}
    // ], (err,result) => {
    //         if(err) {
    //             return console.log('Unable to insert user', err);
    //         }
    //         console.log(result.ops)
    //     });
        
    






    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err,result) =>{
    //    if(err) {
    //      return console.log('Unable to insert todo', err);
    //    }
    //    console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    // db.collection('User').insertOne({
    //     name: 'Bankole',
    //     age: 24,
    //     occupation: 'english teacher',
    //     location: 'Akure'
    // }, (err,result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops)
    // });

    // db.collection('User').insertOne({
    //     name: 'ola',
    //     age: 25,
    //     occupation: 'math teacher',
    //     location: 'Akure'
    // }, (err,result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops)
    // });

    // db.collection('User').insertOne({
    //     name: 'shade',
    //     age: 30,
    //     occupation: 'french teacher',
    //     location: 'Akure'
    // }, (err,result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops)
    // });

    // db.collection('User').insertOne({
    //     name: 'yink',
    //     age: 40,
    //     occupation: 'yoruba teacher',
    //     location: 'Akure'
    // }, (err,result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops)
    // });

    // db.collection('User').insertOne({
    //     name: 'pelumi',
    //     age: 45,
    //     occupation: 'arab teacher',
    //     location: 'Akure'
    // }, (err,result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops)
    // });

    // db.collection('User').insertOne({
    //     name: 'taju',
    //     age: 25,
    //     occupation: 'science teacher',
    //     location: 'Akure'
    // }, (err,result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops)
    // });

    // db.collection('User').insertOne({
    //     name: 'ahmed',
    //     age: 35,
    //     sex: 'male',
    //     occupation: 'science teacher',
    //     location: 'Akure'
    // }, (err,result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops);
    // });

    db.close();
});