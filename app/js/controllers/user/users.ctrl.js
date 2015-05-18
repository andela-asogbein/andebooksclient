'use strict';

angular.module('Andebooks').controller('usersCtrl', ['$scope', '$location', '$routeParams', '$mdDialog', 'userService', function($scope, $location, $routeParams,$mdDialog, userService){

  userService.allUsers().success(function(data){
    $scope.users = data;
    $location.path('/users');
  });

  $scope.allUsers = function(){
    userService.allUsers().success(function(data){
      console.log(data)
      $scope.users = data;
    $location.path('/users');

    });
  };

}]);
