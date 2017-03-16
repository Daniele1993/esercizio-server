var path =require('path');
var bodyparser= require('body-parser');
module.exports =function(app,express) {

    
    app.use(bodyparser.json());


    //ROTTA PER LA CARTELLA TODOLIST
    app.use('/api/dbcompleto',require('./../risorse/todolist/index.js'));



};