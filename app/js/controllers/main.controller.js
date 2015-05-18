'use strict';

var app = angular.module('Andebooks', ['ngMaterial','ngRoute']);

//define the routes that the frontend will use
app.config(function($routeProvider, $httpProvider){
  $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'andebooksCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'andebooksCtrl'
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

//controller
app.controller('andebooksCtrl', ['$scope', '$location', '$rootScope','$routeParams','$mdDialog', 'userService','bookService', 'Auth', 'AuthToken', 'AuthInterceptor', function($scope, $location, $rootScope, $routeParams, $mdDialog, userService, bookService, Auth, AuthToken, AuthInterceptor){

  $scope.loggedIn = Auth.isLoggedIn();

  $rootScope.$on('$routeChangeStart', function(){
    $scope.loggedIn = Auth.isLoggedIn();
    Auth.getUser().success(function(data){
      $scope.user = data;
    });
  });

  // $scope.allUsers = function(){
  //   userService.allUsers().success(function(data){
  //     $scope.users = data;
  //     $location.path('/users');
  //   });
  // };

  $scope.doLogin = function(){
    Auth.login($scope.loginData.username, $scope.loginData.password)
      .success(function(data){
        $location.path('/books');
      })
      .error(function(err){
        $location.path('/login');
      });
  };

  $scope.doLogout = function(){
    Auth.logout();
    $scope.user = {};
    $location.path('/login');
  };

  $scope.createUser = function(userData){
     userService.addUser(userData).success(function(data){
      $scope.loggedIn = true;
       $location.path('/books');
     });
  };
}]);
