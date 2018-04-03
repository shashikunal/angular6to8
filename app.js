var myApp = angular.module("myApp" , ["ngRoute"]);

myApp.filter("myFilter" , function(){
return function(input , option){
    if(isNaN(option) || option ==""){
        return input;
    }else {
     return input.substring(0 , option).toUpperCase();
    }
  }
});

myApp.controller("myCtr" , function($scope){
$scope.userdata = [
{
    name:"vinay",
    age:21,
    company:"testyantra",
    doj:new Date("04-04/1994"),
    salary:50000
},
{
    name:"manu",
    age:24,
    company:"qspiders",
    doj:new Date("06-04/1994"),
    salary:50000
},
{
    name:"manu",
    age:24,
    company:"jspiders",
    doj:new Date("06-04/1994"),
    salary:50000
}
];

 
});





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