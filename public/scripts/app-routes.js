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

    // route for the request page
    .state('app.request', {
      url: 'request',
      views: {
        'content@': {
          templateUrl: 'views/request.html'
          // controller: 'ContactController'
        }
      }
    })

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

    .state('app.newpost', {
      url: 'newpost',
      views: {
        'content@': {
          templateUrl: 'views/submitReview.html',
          controller: 'submitReviewController'
        }
      }
    });

    $urlRouterProvider.otherwise('/');
});
