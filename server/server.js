var express = require('express');
var bodyParper = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParper.json());

app.post('/todos', (req, res) =>{
    var todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(4000,() => {
    console.log('Started on port 4000');
});

module.exports = {app};





// var User = new User ({
//     email: '    juwon24luv1@gmail.com     '
// });

// User.save().then((doc) =>{
//     console.log('User saved', doc);
// }, (e) =>{
//     console.log('Unable to save user', e);
// });

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo')
// });


// var classTodo = new Todo({
//     text: '   edit this video   '
//     // text: 'mongodb is interesting',
//     // completed: true,
//     // completedAt: 123
// });

// classTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo', e);
// });


