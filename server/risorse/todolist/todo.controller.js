var mongoose =require('mongoose');
var todo =require('./todo.model.js');

module.exports=(function(){

    var getTodo= function(req,res){
        todo.find()
        .then(function(data){
            res.status(200).json(data);
        })
        .catch(function(err){
            res.status(500).json(err);
        })
    }

    var deleteTodo=function(req,res){

    }

    var createTodo=function(req,res){
        var nuovo=new todo(req.body);
        nuovo.save()
             .then(function(data){
                 res.status(200).json(data);
             })
             .catch(function(err){
                 res.status(500).json(err);
             });
    }

    return{
        getTodo:getTodo,
        deleteTodo:deleteTodo,
        createTodo:createTodo
    }
})();