angular.module('app').controller('todoCtrl',function($scope,todoSrv,$state){
    
    $scope.titolo="la mia cazzo di todo list";


    $scope.lista =[];
    todoSrv.getTodo().then(function(data){
        $scope.lista = data;
        
    });
    
    $scope.crea=function(){
        console.log($scope.nuovo);
        todoSrv.creaTodo($scope.nuovo)
               .then(function(data){
                   console.log(data);
                   $scope.nuovo="";
        });
    }
    
});