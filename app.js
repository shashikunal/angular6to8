var testApp = angular.module("myApp" , []);

testApp.controller("myCtr" , ($scope , $http)=>{
$http.get("https://api.github.com/users").then((item)=>{
$scope.users = item.data;
});
});


