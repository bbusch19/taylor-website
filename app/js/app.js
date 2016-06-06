angular.module('taylorApp', ['ui.router', 'firebase']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider

.state('home', {
    url: '/',
    templateUrl: '../views/homeTmpl.html',
    controller: 'homeCtrl'
})

})
