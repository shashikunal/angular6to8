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
}]);





//new data
myApp.run(function($rootScope){
    $rootScope.message = "hello this is root scope";
})
//service 
myApp.service("myService" , function(){
    var num = Math.round(Math.random()*100);
     this.random = function(){
        return num;
    }
});

//factory
myApp.factory("myFactory" , function(){
    var obj = {};
    var num = Math.round(Math.random()*100);
    obj.random = function(){
        return num;
    }
    return obj;
});

myApp.controller("myCtr" , function($scope , myService , $location , $timeout ,$interval ) {
    $scope.randomNumber = function(){
      $scope.randomcheck = myService.random();
    }

    $scope.MyLocation = $location.absUrl();

    $scope.test = "hello java";

    $timeout(function(){
        $scope.test = "hello angularjs";
    },2000);


    $scope.time = new Date().toLocaleTimeString();
    $interval(function(){
        $scope.time = new Date().toLocaleTimeString();
    },1000);

   $scope.message = "hello this is  scope";
});

 
