var app = angular.module("friuteApp",['ngRoute'])
app.config(function($routeProvider){
	$routeProvider.when('/tab/home',{
		templateUrl:'/src/view/home.html',
		controller:'homeCtrl'
	}).when('/tab/car',{
		templateUrl:'/src/view/car.html',
		controller:'carCtrl'
	}).otherwise({redirectTo:'/tab/home'})
})
