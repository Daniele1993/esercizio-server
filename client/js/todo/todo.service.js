angular.module('app').service('todoSrv',function($http){
    
    const PORT=3000;

    var getTodo=function(){

        return $http({
            method:'GET',
            url:'http://localhost:' + PORT + '/api/dbcompleto'

        }).then(function(res){
            return res.data;
        },function(err){
            
        })
        .catch(function(err){
            return err;
        })

    }
     var creaTodo=function(nuovo){
         return $http({
             method:'POST',
             url:'http://localhost:' + PORT + '/api/dbcompleto',
             data:nuovo
         }).then(function(res){
             return res.data;
         },function(err){

         }).catch(function(err){
             return err;
         });

     }
    
    return{
        getTodo:getTodo,
        creaTodo:creaTodo
    }
})