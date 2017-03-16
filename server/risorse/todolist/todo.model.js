var mongoose =require('mongoose');
var Schema= mongoose.Schema;

var todoSchema= new Schema({

titolo:{
    type:String,
    required:[true,"inserisci il titolo"]
},

descrizione:{
    type:String,
    required:[true,"inserisci la descrizione"]
},

fatto:{
    type:Boolean,
    default:false
}
});

var todo=mongoose.model('todo',todoSchema);

module.exports= todo;
