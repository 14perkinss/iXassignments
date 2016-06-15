var app = angular.module("RouterApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "pages/home.html"
  })

  $routeProvider.when("/contact_book", {
    templateUrl: "pages/contact_book.html"
  })

});

app.controller("HomeCtrl", function($scope) {

  //Initialize the inputs
  $scope.name = "";
  $scope.phone = "";
  $scope.email = "";
  $scope.password = "";
  $scope.password2 = "";
  $scope.mySwitch = false;
  $scope.inputType = "password";
  //Check the inputs
  $scope.checkInputs = function() {

    $scope.nameError = "";
    $scope.phoneError = "";
    $scope.emailError = "";
    $scope.passwordError = "";
    $scope.passwordConfirmError = "";

    //if all fields are valid, print a validation message
    if (checkName($scope.name) && checkPhone($scope.phone) 
        && checkEmail($scope.email) && checkPassword($scope.password) 
        && checkPassword2($scope.password, $scope.password2)) {
      $scope.mySwitch = true;
      //$scope.response = "Welcome, " + $scope.name + "!";
      $scope.name = "";
      $scope.phone = "";
      $scope.email = "";
      $scope.password = "";
      $scope.password2 = "";
    }

    else {
      if (!checkName($scope.name)) 
        $scope.nameError = "Please enter your name."

      if (!checkPhone($scope.phone)) 
        $scope.phoneError = "Please Ensure Phone number is XXX-XXX-XXXX."; 

      if (!checkEmail($scope.email)) 
        $scope.emailError = "Please provide a valid email."

      if (!checkPassword($scope.password))
        $scope.passwordError = "Password must be at least 6 characters.";

      if (!checkPassword2($scope.password, $scope.password2)) 
        $scope.passwordConfirmError = "Please make sure your passwords match."
    }
  }

  $scope.showHidePass = function() {
  if ($scope.inputType == 'password')
    $scope.inputType = 'text';
  else
    $scope.inputType = 'password';
  }
});

app.controller("ContactCtrl", function($scope) {

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

function checkEmail(email) {

  if (!email.includes('@') || !email.includes('.')) {
    return false;
  }

  var atIndex = email.indexOf('@');

  if (email.indexOf('.') < atIndex + 1) {
    return false;
  }

  if (atIndex === 0) {
    return false;
  }

  return true;
}

function checkPassword(password) {

  if (password.length < 6) return false;
  else return true;
}

function checkPassword2(password1, password2) {
  if (password1 === password2) return true;
  return false;
}