var app = angular.module("FormApp", []);

app.controller("FormCtrl", function($scope) {

  //Initialize the inputs
  $scope.name = "";
  $scope.phone = "";
  $scope.people = [];
  //Check the inputs
  $scope.checkInputs = function() {
    $scope.response = "";
    $scope.nameError = "";
    $scope.phoneError = "";
    //if all fields are valid, print a validation message
    if (checkName($scope.name) && checkPhone($scope.phone)) {
      $scope.person = {
        name: $scope.name,
        phone: $scope.phone
      }
      $scope.response = "Successfully added " + $scope.name + " to your contact book!"
      $scope.people.push($scope.person);
      $scope.name = "";
      $scope.phone = "";
    }

    else {
      if (!checkName($scope.name)) 
        $scope.nameError = "Please enter your name."

      if (!checkPhone($scope.phone)) 
        $scope.phoneError = "Please Ensure Phone number is XXX-XXX-XXXX."; 
    }
  }

  $scope.searchContacts = function(person) {
    return person.name + ": " + person.phone;
  }
});


function checkName(name) {
  if (name !== "") return true;
  else return false;
}

function checkPhone(phone) {

  if (phone.length !== 12) {
    return false;
  }

  for (var i = 0; i < 12; i++) {
    if (i === 3 || i === 7) {
      if (phone[i] != "-") {
        return false;
      }
    }

    else if (isNaN(phone[i])) {
      return false;
    }
  }

  return true;
}