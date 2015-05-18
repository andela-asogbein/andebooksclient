'use strict';

angular.module('Andebooks').controller('booksCtrl', ['$scope', '$location', '$routeParams', '$mdDialog', 'bookService', function($scope, $location, $routeParams,$mdDialog, bookService){

  bookService.allBooks().success(function(data){
    $scope.books = data;
  });

  $scope.allBooks = function(){
    bookService.allBooks().success(function(data){
      $scope.books = data;
      $location.path('/books');
    });
  };

  $scope.deleteBook = function(bookid){
    bookService.deleteBook(bookid).success(function(data){
      $location.path('/books');
    });
  };

  $scope.showConfirm = function(ev, bookid) {
    var confirm = $mdDialog.confirm()
      .title('Do you want to permanently delete this book?')
      .content('There is no way for you to retrieve it...')
      .ariaLabel('Lucky day')
      .ok('Yes')
      .cancel('No')
      .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {
      $scope.deleteBook(bookid);
      $scope.allBooks();
    }, function() {});
  };

}]);
