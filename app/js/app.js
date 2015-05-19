'use strict';

angular.module('Andebooks', ['ngMaterial','ngRoute'])

//define the routes that the frontend will use
  .config(function($routeProvider, $httpProvider){
    $routeProvider
        .when('/', {
          templateUrl: 'views/books.html',
          controller: 'booksCtrl'
        })
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'mainCtrl'
        })
        .when('/addbook', {
          templateUrl: 'views/addbook.html',
          controller: 'addBookCtrl'
        })
        .when('/book/edit/:bookid', {
          templateUrl: 'views/editbook.html',
          controller: 'editBookCtrl'
        })
        .when('/books/:author', {
          templateUrl: 'views/booksbyauthor.html',
          controller: 'authorBooksCtrl'
        })
        .when('/book/:subject', {
          templateUrl: 'views/booksbycategory.html',
          controller: 'categoryBooksCtrl'
        })
        .when('/books', {
          templateUrl: 'views/books.html',
          controller: 'booksCtrl'
        })
        .when('/randombook', {
          templateUrl: 'views/randombook.html',
          controller: 'randomBookCtrl',
          resolve: {
            Randombook: function(bookService) {
              return bookService.getRandomBook().success(function(data) {
                return data;
              });
            }
          }
        })
        .when('/users', {
          templateUrl: 'views/users.html',
          controller: 'usersCtrl'
        });

    $httpProvider.interceptors.push('AuthInterceptor');
  });
