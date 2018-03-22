var myApp = angular.module("myApp" , ["ngRoute"]);

myApp.config(["$routeProvider" , "$locationProvider" , function($routeProvider , $locationProvider){
    $routeProvider.when("/" , {
        templateUrl:"views/home.html"
    }).when("/login" , {
        templateUrl:"views/login.html"
    }).when("/register" , {
        templateUrl:"views/register.html"
    }).otherwise({
        redirectTo:"/login"
    });
}])