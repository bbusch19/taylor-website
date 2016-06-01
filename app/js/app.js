angular.module('taylorApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider

.state('home', {
    url: '/',
    templateUrl: '../views/homeTmpl.html',
    controller: 'homeCtrl'
})

})
