'use strict';

angular.module('Andebooks').controller('addBookCtrl', ['$scope', '$location', '$routeParams', 'bookService', 'userService', 'googleBookFactory',function($scope, $location, $routeParams,bookService, userService, googleBookFactory){

  $scope.addBook = function(bookData,user){

    var title = bookData.title;
    var author = bookData.author;
    var titleConcat = title.replace(/ /g, '+');
    var authorConcat = author.replace(/ /g , '+');
    var authorTitle = titleConcat + '+inauthor:'+authorConcat;

    googleBookFactory.bookInformation(authorTitle).success(function(data){
        $scope.bookData.imageUrl = data.items[0].volumeInfo.imageLinks.smallThumbnail;

        //console.log('ishe', $scope.bookData.imageUrl);
        userService.getByUsername(user.username)
          .success(function(data){

          bookService.addBook(bookData,data._id).success(function(data){
            $location.path('/books');
          });
        });
    });
  };
}]);
