'use strict';

angular.module('Andebooks').controller('addBookCtrl', ['$scope', '$location', '$routeParams', 'bookService', 'userService',function($scope, $location, $routeParams,bookService, userService){

  $scope.addBook = function(bookData,user){
    // console.log(user);
    //var id
    userService.getByUsername(user.username)
      .success(function(data){

        bookService.addBook(bookData,data._id).success(function(data){
          $location.path('/books');
        });
      });
  };
}]);
