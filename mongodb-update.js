// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
       return console.log('Unable to connect to MoNgoDB server');
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a568bcd0c38ed06b3e70ae3')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('User').findOneAndUpdate({
        _id: new ObjectID('5a56910a3455f50716f42d7a')
    }, {
        $set: {
            name: 'omolara'
        },
        $inc: {
            age : 5
        },
        $currentDate: {
            lastModified: true,
            "cancellation.date": { $type: "timestamp" }
        },
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    
    // db.close();
});