'use strict';

angular.module('Andebooks').controller('authorBooksCtrl', ['$scope', '$location', '$routeParams', 'bookService', function($scope, $location, $routeParams, bookService){

    bookService.searchAuthor($routeParams.author).success(function(data){
      console.log(data)
      $scope.books = data;
    });
}]);
