angular.module("taylorApp",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/"),e.state("home",{url:"/",templateUrl:"../views/homeTmpl.html",controller:"homeCtrl"})}]),angular.module("taylorApp").directive("aboutDir",function(){return{restrict:"E",templateUrl:"../views/aboutDir.html"}}),angular.module("taylorApp").directive("navDir",function(){function e(e,t,o){document.getElementById("hamburger");t.bind("click",function(){t.parent().toggleClass("nav-height")})}return{restrict:"A",link:e}}),angular.module("taylorApp").controller("homeCtrl",["$scope","$interval",function(e,t){e.slides=["./img/paige-breiden.jpg","./img/portrait.jpeg","https://static.pexels.com/photos/27341/pexels-photo-27341.jpg","https://static.pexels.com/photos/88819/pexels-photo-88819.jpeg"]}]),$(document).ready(function(){$(".carousel").slick({autoplay:!0,autoplaySpeed:5e3,infinite:!0})});
//# sourceMappingURL=maps/min.js.map
