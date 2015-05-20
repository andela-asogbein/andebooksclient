'use strict';
var app = angular.module('Andebooks');

app.controller('mainCtrl', ['$scope', '$location', '$rootScope','$routeParams','$mdDialog', 'userService','bookService', 'Auth', 'AuthToken', 'AuthInterceptor', function($scope, $location, $rootScope, $routeParams, $mdDialog, userService, bookService, Auth, AuthToken, AuthInterceptor){

  $scope.doLogin = function(){
    Auth.login($scope.loginData.username, $scope.loginData.password)
      .success(function(data){
        $location.path('/books');
      })
      .error(function(err){
        $location.path('/login');
      });
  };

  $scope.doLogout = function(){
    Auth.logout();
    $scope.user = {};
    $location.path('/login');
  };

  $scope.createUser = function(userData){
     userService.addUser(userData).success(function(data){
      $scope.loggedIn = true;
       $location.path('/books');
     });
  };
}]);
