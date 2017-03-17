var path =require('path');
var bodyparser= require('body-parser');
module.exports =function(app,express) {

    
    app.use(bodyparser.json());

    app.use('/bootstrap',express.static(path.join(__dirname, "..","..","node_modules","bootstrap","dist")));

//ROTTE STATICHE

    //angular
    app.use('/angular',express.static(path.join(__dirname, "..","..","node_modules","angular")));
    //angular-aria
    app.use('/angular-aria',express.static(path.join(__dirname, "..","..","node_modules","angular-aria")));
    //angular-material
    app.use('/angular-material',express.static(path.join(__dirname, "..","..","node_modules","angular-material")));
    //angular-animate
    app.use('/angular-animate',express.static(path.join(__dirname, "..","..","node_modules","angular-animate")));
    //angular-ui-router
    app.use('/angular-ui-router',express.static(path.join(__dirname, "..","..","node_modules","angular-ui-router")));
    //js
    app.use('/js',express.static(path.join(__dirname, "..","..","client","js")));
    //css
    app.use('/css',express.static(path.join(__dirname, "..","..","client","css")));
    //jquery
    app.use('/jquery',express.static(path.join(__dirname, "..","..","node_modules","jquery","dist")));

    //ROTTA INDEX
    app.get('/',function(req,res){
        res.sendFile(path.join(__dirname,"..","..","client","index.html"));
    });

    //ROTTA PER LA CARTELLA TODOLIST
    app.use('/api/dbcompleto',require('./../risorse/todolist/index.js'));
};