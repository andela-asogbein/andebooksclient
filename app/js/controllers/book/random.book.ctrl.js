'use strict';

angular.module('Andebooks').controller('randomBookCtrl', ['$scope', '$location', '$routeParams', 'bookService', 'Randombook', function($scope, $location, $routeParams, bookService, Randombook){

  $scope.randomBook = Randombook.data;
}]);
