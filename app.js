var testApp = angular.module("myApp" , []);




testApp.controller("myCtr" , function($scope , $http){

        $scope.deletePlayer = function(player){
        var removedPlayer = $scope.players.indexOf(player);
        $scope.players.splice(removedPlayer , 1);
    
    }


    $scope.addPlayers = function(){
        $scope.players.unshift({
            name: $scope.newName,
            id: $scope.newId,
            runs:$scope.newRuns
        });
    };  

$http.get("data.json").then(function(item){
$scope.players = item.data;
});
});


