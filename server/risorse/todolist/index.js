var express=require('express');
var router =express.Router();
var todo=require('./todo.controller.js');

//prendi tutti i todo
router.get('/',todo.getTodo);

//cancella un todo
router.delete('/',todo.deleteTodo);
    

    




module.exports=router;