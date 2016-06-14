var app = angular.module("TodoApp",[]);

app.controller("MainCtrl", function($scope) {
  $scope.newItem = "";
  $scope.items = [];

  $scope.addItem = function() {
    $scope.items.push($scope.newItem);
    $scope.newItem = "";
  }

  $scope.removeItem = function(item) {
    $scope.items.splice( $scope.items.indexOf(item), 1 );
  }

});