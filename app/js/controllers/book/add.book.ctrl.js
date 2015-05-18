'use strict';

angular.module('Andebooks').controller('addBookCtrl', ['$scope', '$location', '$routeParams', 'bookService', function($scope, $location, $routeParams,bookService){

  $scope.addBook = function(bookData){
    bookService.addBook(bookData).success(function(data){
      $location.path('/books');
    });
  };
}]);
