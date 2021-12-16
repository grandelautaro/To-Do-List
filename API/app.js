const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose')
const { Group, Task } = require('./db/models');
const { listen } = require('express/lib/application');

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); 

app.get('/groups', (req, res, next)=>{
    //return an array of all the groups in the database
    Group.find({}).then((groups) =>{
        res.send(groups)
    });
});

app.post('/groups', (req,res, next)=>{
    //create a new group and return the new group back to the user including the id
    let title = req.body.title;
    let newGroup = new Group({
        title
    });
    newGroup.save().then((groupDoc)=>{
        res.send(groupDoc);
    });
});

app.patch('/groups/:id', (req,res, next)=>{
    //update a specified group
    listen.findOneAndUpdate({ _id: req.params.id}, {
        $set: req.body
    }).then(()=>{
        res.sendStatus(200);
    });
});

app.delete('/groups/:id', (req,res, next)=>{
    //delete a specified group
    listen.findOneAndRemove({
        _id: req.params.id
    }).then((removedGroupDoc)=>{
        res.send(removedGroupDoc);
    });
});

app.get('/groups/:groupId/tasks', (req,res, next)=>{
    //return all tasks that belongs to a specific group
    Task.find({
        _groupId: req.params.groupId
    }).then((tasks)=>{
        res.send(tasks);
    });
});

app.post('/groups/:groupId/tasks', (req,res, next)=>{
    //create a new task in a group by groupId
    let newTask = new Task({
        title: req.body.title,
        _groupId: req.params.groupId 
    });
    newTask.save().then((newTaskDoc)=>{
        res.send(newTaskDoc)
    });
});

app.patch('/groups/:groupId/tasks/:taskId', (req,res, next)=>{
    //update an existing task by taskId
    Task.findOneAndUpdate({
        _id : req.params.taskId,
        _groupId: req.params.groupId
    },
    {
        $set: req.body
    }).then(()=>{
        res.sendStatus(200);
    });
});

app.delete('/groups/:groupId/tasks/:taskId', (req,res, next)=>{
    //delete a task
    Task.findOneAndRemove({
        _id: req.params.taskId,
        _groupId: req.params.groupId
    }).then((removedTaskDoc)=>{
        res.send(removedTaskDoc);
    });
});

app.listen(3000, () =>{
    console.log("Server listening on port 3000")
});