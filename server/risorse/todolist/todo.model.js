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
},
data:{
    type:Date,
}
});

//AGGIUNTA DELLA DATA AL MODEL
todoSchema.pre('save',function(next){
        if(!this.data){
        this.data = new Date();
    }

    next();
});

var todo=mongoose.model('todo',todoSchema);

module.exports= todo;
