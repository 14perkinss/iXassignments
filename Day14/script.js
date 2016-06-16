var app = angular.module("ChommiesApp", ["ngRoute"]);
var CHOMMIES_TOKEN = "979a96ea2e435ae70caaf3402464eee2";

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/feed.html"
  })
  $routeProvider.when("/me", {
    templateUrl: "templates/personal.html"
  })
});


app.controller("FeedCtrl", function($scope, $http) {
  var url = "http://ixchommies.herokuapp.com/";
  $http({
    method: "GET",
    url: url + "brus",
    params: { token: "979a96ea2e435ae70caaf3402464eee2" }
  }).then(function(response) {
    $scope.brus = response.data;
    console.log("b", $scope.brus);
  });

  $http({
    method: "GET",
    url: url + "props",
    params: { token: "979a96ea2e435ae70caaf3402464eee2" }
  }).then(function(response) {
    $scope.props = response.data;
    console.log("p", $scope.props);
  });

  $scope.refresh = function() {
    $http({
      method: "GET",
      url: url + "props",
      params: { token: "979a96ea2e435ae70caaf3402464eee2" }
    }).then(function(response) {
      $scope.props = response.data;
      console.log("p", $scope.props);
    });
  }

  $scope.addProp = function() {
    console.log($scope.newProp);
    $http({
      method: "POST",
      url: url + "props",
      params: { token: "979a96ea2e435ae70caaf3402464eee2" },
      data: {
        props: $scope.newProp.text,
        for: $scope.newProp.receiver.id,
      }
    }).then(function(response) {
       console.log(response.data);
       $scope.newProp = {};
    }).catch(function(response) {
      $scope.errorMessage = (response.data.message);
    });
  }
});

app.controller("MeCtrl", function($scope, $http) {
  var url = "http://ixchommies.herokuapp.com/props/me";
  $http({
    method: "GET",
    url: url,
    params: { token: "979a96ea2e435ae70caaf3402464eee2" }
  }).then(function(response) {
    $scope.props = response.data;
    console.log("b", $scope.props);
  });
});