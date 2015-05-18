'use strict';


angular.module('Andebooks').controller('editBookCtrl', ['$scope', '$location', '$routeParams', 'bookService', function($scope, $location, $routeParams,bookService){

  bookService.oneBook($routeParams.bookid).success(function(data){
      $scope.bookData = data;
      //console.log($scope.bookData);
  });

  $scope.editBook = function(bookid, bookData){
    bookService.editBook($routeParams.bookid, bookData).success(function(data){
      $location.path('/books');
    });
  };

}]);
