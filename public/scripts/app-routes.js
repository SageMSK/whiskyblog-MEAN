(function () {
  'use strict';

  angular.module('myApp')

  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      // route for the home page
      .state('app', {
        url: '/',
        views: {
          'header': {
            templateUrl: 'views/header.html'
          },
          'content': {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
          },
          'footer': {
          templateUrl: 'views/footer.html'
          }
        }
      })
      .state('app.error', {
        url: 'error',
        views: {
          'content@': {
            templateUrl: 'views/error.html'
          }
        }
      })
      // route for the about page
      .state('app.about', {
        url: 'about',
        views: {
          // specifiy only the content.  Header and footer will retain
          'content@': {
            templateUrl: 'views/about.html'
            // controller: 'AboutController'
          }
        }
      })
      // Main whiskies page/list
      .state('app.whiskies', {
        url: 'whiskies',
        views: {
          'content@': {
            templateUrl: 'views/whiskies.html',
            controller: 'whiskyController'
          }
        }
      })

      // route for the whisky details page
      .state('app.whiskydetails', {
        url: 'whiskies/:id',
        views: {
          'content@': {
            templateUrl: 'views/whiskyDetail.html',
            controller: 'whiskyDetailController'
          }
        }
      })
      // New Post
      .state('app.newpost', {
        url: 'newpost',
        views: {
          'content@': {
            templateUrl: 'views/submitReview.html',
            controller: 'submitReviewController'
          }
        }
      })
      // Edit Post
      .state('app.edit', {
        url: 'edit',
        views: {
          'content@': {
            templateUrl: 'views/edit.html',
            controller: 'editReviewController'
          }
        }
      })
      // login
      .state('app.login', {
        url: 'login',
        views: {
          'content@': {
            templateUrl: 'views/login.html',
            controller: 'loginController'
          }
        }
      })
      // register
      .state('app.register', {
        url: 'register',
        views: {
          'content@': {
            templateUrl: 'views/register.html',
            controller: 'registerController'
          }
        }
      });

      $urlRouterProvider.otherwise('/');
  });
})();
