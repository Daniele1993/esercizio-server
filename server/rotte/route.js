var path =require('path');
module.exports =function(app,express){

    //ROTTA PER LA CARTELLA TODOLIST
    app.use('/api/dbcompleto',require('./../risorse/todolist/index.js'));

};