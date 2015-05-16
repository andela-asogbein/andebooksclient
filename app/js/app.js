'use strict';

var app = angular.module('Andebooks', ['ngMaterial','ngRoute']);

app.config(function($routeProvider){
  $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'andebooksCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'andebooksCtrl'
      }).
      when('/register', {
        templateUrl: 'views/register.html',
        controller: 'andebooksCtrl'
      })
      .when('/books', {
        templateUrl: 'views/books.html',
        controller: 'andebooksCtrl'
      })
      .when('/random', {
        templateUrl: 'views/random.html',
        controller: 'andebooksCtrl'
      })
      .when('/:bookid', {
        templateUrl: 'views/bookdetail.html',
        controller: 'andebooksCtrl'
      });
});

// angular.module('Andebooks').value('demoData', function() {
//   return [{
//     bookid: 1,
//     cover: 'http://www.inc.com/uploaded_files/image/feature-57-the-lean-startup-book-pop_10909.jpg',
//     title: 'The Lean Startup',
//     author: 'Eric Ries',
//     blurb: 'A book about mvp'
//   },{
//     bookid: 2,
//     cover: 'http://www.africabookclub.com/wp-content/uploads/2011/02/LionJewel.jpg',
//     title: 'The Lion and the Jewel',
//     author: 'Wole Soyinka',
//     blurb: 'A traditional play'
//   },{
//     bookid: 3,
//     cover: 'http://it-ebooks.info/images/ebooks/10/the_rails_4_way.jpg',
//     title: 'The Rails 4 Way',
//     author: 'Obie Fernandez',
//     blurb: 'Bestselling book about Ruby on Rails'
//   }];
// });

// app.controller('andebooksCtrl', ['$scope', '$routeParams', 'demoData', function($scope, $routeParams, demoData){
//   $scope.books = [{
//     bookid: 1,
//     cover: 'http://www.inc.com/uploaded_files/image/feature-57-the-lean-startup-book-pop_10909.jpg',
//     title: 'The Lean Startup',
//     author: 'Eric Ries',
//     blurb: 'A book about mvp'
//   },{
//     bookid: 2,
//     cover: 'http://www.africabookclub.com/wp-content/uploads/2011/02/LionJewel.jpg',
//     title: 'The Lion and the Jewel',
//     author: 'Wole Soyinka',
//     blurb: 'A traditional play'
//   },{
//     bookid: 3,
//     cover: 'http://it-ebooks.info/images/ebooks/10/the_rails_4_way.jpg',
//     title: 'The Rails 4 Way',
//     author: 'Obie Fernandez',
//     blurb: 'Bestselling book about Ruby on Rails'
//   }];
//   $scope.book = demoData()[$routeParams.bookid - 1];

//   $scope.username = '';
//   $scope.password = '';
//   $scope.email = '';
// }]);
app.controller('andebooksCtrl', ['$scope', function($scope){
  // bookService.success(function(data){
  //   $scope.books = data;
  // });
  $scope.books = {
    title:"title",
    description:"description",
    blurb:"123"
  }
});
