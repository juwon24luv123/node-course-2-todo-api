// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
       return console.log('Unable to connect to MoNgoDB server');
    }
    console.log('connected to MongoDB server');

    // Three ways of targeting MANGODB

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'want to sleep'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'want to sleep'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    //     db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //         console.log(result);
    //     })

    //     db.collection('User').deleteMany({name: 'Bankole'}).then((result) => {
    //         console.log(result);
    //     });

        db.collection('User').deleteOne({name: 'omo'}).then((result) => {
            console.log(result);
        })

    // db.close();
});