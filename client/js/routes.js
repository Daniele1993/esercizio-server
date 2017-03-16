angular.module('app').config(function($stateProvider,$urlRouterProvider){
    
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/','/client')

    $stateProvider.state('/client',{
        url:'/client',
        templateUrl:'/js/todo/todo.template.html',
        controller:'todoCtrl'
    });
});