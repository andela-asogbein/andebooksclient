'use strict';

angular.module('Andebooks').controller('categoryBooksCtrl', ['$scope', '$location', '$routeParams', 'bookService', function($scope, $location, $routeParams, bookService){

    bookService.searchCategory($routeParams.subject).success(function(data){
      console.log(data);
      $scope.books = data;
    });
}]);
