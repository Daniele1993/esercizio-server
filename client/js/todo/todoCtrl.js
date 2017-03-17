angular.module('app').controller('todoCtrl',function($scope,todoSrv,$state){
    
    $scope.titolo="la mia cazzo di todo list";


    $scope.lista =[];
    todoSrv.getTodo().then(function(data){
        $scope.lista = data;
        $scope.lista.forEach(function(el){
            el.data = new Date(el.data);
        })
        
    });
    
    $scope.crea=function(){
        todoSrv.creaTodo($scope.nuovo)
               .then(function(data){
                   // serve per pulire la form
                   $scope.nuovo={}; 
                   return todoSrv.getTodo()
        }).then(function(data){
            $scope.lista = data;
        })
    }
    $scope.elimina=function(id){
        todoSrv.deleteTodo(id)
               .then(function(data){
                   return todoSrv.getTodo()//serve per fa ricoparire la lista dopo l'eliminazione
                   }).then(function(data){
                       $scope.lista = data;
                   });
    }
    $scope.update=function(id,fatto){
        todoSrv.updateTodo(id,fatto)
          .then(function(data){
            return todoSrv.getTodo()
        }).then(function(data){
            $scope.lista = data;
        });
    }
    
});