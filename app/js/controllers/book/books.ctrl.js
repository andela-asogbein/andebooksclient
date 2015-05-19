'use strict';

angular.module('Andebooks').controller('booksCtrl', ['$scope', '$location', '$routeParams', '$mdDialog', 'bookService', function($scope, $location, $routeParams,$mdDialog, bookService){

  bookService.allBooks().success(function(data){
    $scope.books = data;
  });

  $scope.deleteBook = function(bookid, index){
    bookService.deleteBook(bookid).success(function(data){
      $scope.books.splice(index, 1);
      // $location.path('/books');
    });
  };

  $scope.showConfirm = function(ev, bookid, index) {
    var confirm = $mdDialog.confirm()
      .title('Do you want to permanently delete this book?')
      .content('There is no way for you to retrieve it...')
      .ariaLabel('Lucky day')
      .ok('Yes')
      .cancel('No')
      .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {
      $scope.deleteBook(bookid, index);
      $location.path('/books');
    }, function() {});
  };

}]);
