angular.module('app').controller('todoCtrl',function($scope,todoSrv,$state){
    
    $scope.titolo="la mia cazzo di todo list";


    $scope.lista =[];
    todoSrv.getTodo().then(function(data){
        $scope.lista = data;
        
    });
    
    $scope.crea=function(){
        
        todoSrv.creaTodo($scope.nuovo)
               .then(function(data){
                   // serve per pulire la form
                   $scope.nuovo=""; 
                   return todoSrv.getTodo()
        }).then(function(data){
            $scope.lista = data;
        })
    }
    
});