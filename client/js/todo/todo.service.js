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

     var deleteTodo=function(id){
         return $http({
             method:'DELETE',
             url:'http://localhost:' + PORT +'/api/dbcompleto/' + id
         }).then(function(res){
             return res.data;
         }).catch(function(err){
             return err;
         });
     }
      
      var updateTodo = function(id,fatto){
          return $http({
              method:'PUT',
              url:'http://localhost:' + PORT + '/api/dbcompleto/' +id,
              data:{
                  fatto:fatto
              }
          }).then(function(res){
              return res.data;
          }).catch(function(err){
              return err;
          })
      }
    
    return{
        getTodo:getTodo,
        creaTodo:creaTodo,
        deleteTodo:deleteTodo,
        updateTodo:updateTodo
    }
})