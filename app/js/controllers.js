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
      .when('/users', {
        templateUrl: 'views/users.html',
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

app.controller('andebooksCtrl', ['$scope', '$location', '$rootScope','userService','bookService', 'Auth', 'AuthToken', 'AuthInterceptor', function($scope, $location, $rootScope, userService, bookService, Auth, AuthToken, AuthInterceptor){

  $scope.loggedIn = Auth.isLoggedIn();

  $rootScope.$on('$routeChangeStart', function(){
    $scope.loggedIn = Auth.isLoggedIn();
    //console.log($scope.loggedIn)
    Auth.getUser().success(function(data){
        $scope.user = data;
      });
  });

  $scope.doLogin = function(){
    Auth.login($scope.loginData.username, $scope.loginData.password)
      .success(function(data){
        $location.path('/books');
      });
  };

  $scope.doLogout = function(){
    Auth.logout();
    $scope.user = {};
    $location.path('/login');
  };

  bookService.allBooks().success(function(data){
    $scope.books = data;
  });

  userService.allUsers().success(function(data){
    $scope.users = data;
  });

}]);
