'use strict';

var app = angular.module('Andebooks', ['ngMaterial','ngRoute']);

app.config(function($routeProvider){
  $routeProvider
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
      .when('/bookdetail', {
        templateUrl: 'views/bookdetail.html',
        controller: 'views/bookdetail.html'
      });
});

app.controller('andebooksCtrl', ['$scope', function($scope){
  $scope.books = [{
    book_id: 1,
    cover: 'http://www.inc.com/uploaded_files/image/feature-57-the-lean-startup-book-pop_10909.jpg',
    title: 'The Lean Startup',
    author: 'Eric Ries',
    blurb: 'A book about mvp'
  },{
    book_id: 2,
    cover: 'http://www.africabookclub.com/wp-content/uploads/2011/02/LionJewel.jpg',
    title: 'The Lion and the Jewel',
    author: 'Wole Soyinka',
    blurb: 'A traditional play'
  },{
    book_id: 3,
    cover: 'http://it-ebooks.info/images/ebooks/10/the_rails_4_way.jpg',
    title: 'The Rails 4 Way',
    author: 'Obie Fernandez',
    blurb: 'Bestselling book about Ruby on Rails'
  }];

  $scope.username = '';
  $scope.password = '';
  $scope.email = ''
}]);
