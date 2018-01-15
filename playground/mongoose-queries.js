const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

var id = '4a577ad2ec368c23049f1c8c'
// var id = '5a5ca9236761976408c9c87a11';

// ObjectID.isValid

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo)
// }).catch((e) => {
//     console.log(e)
// });

User.find({
    _id: id
}).then((users) => {
    console.log('Users', users)
});

User.findOne({
    _id: id
}).then((user) => {
    console.log('User', user)
});

User.findById(id).then((user) => {
    if(!user) {
        return console.log('Unable to find user')
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
    console.log(e)
});