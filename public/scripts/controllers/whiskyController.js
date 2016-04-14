'use strict';

angular.module('myApp')

.controller('HomeController', ['$scope', 'fpWhiskyFactory', ($scope, fpWhiskyFactory) => {

  $scope.whiskies = fpWhiskyFactory.getWhiskies();

}])

.controller('whiskyController', ['$scope', 'fpWhiskyFactory', 'ReviewFactory', ($scope, fpWhiskyFactory, ReviewFactory) => {

  $scope.whiskies = fpWhiskyFactory.getWhiskies();
  $scope.whiskyLists = ReviewFactory.getList();

}])

.controller('whiskyDetailController', ['$scope', '$stateParams', 'fpWhiskyFactory', ($scope, $stateParams, fpWhiskyFactory) => {

  $scope.whisky = fpWhiskyFactory.getWhisky(parseInt($stateParams.id, 10));

}])

.controller('submitReviewController', ['$scope', 'ReviewFactory', ($scope, ReviewFactory) => {

  $scope.listWhisky = ReviewFactory.getList();

  $scope.review = {
    name: '',
    image: '',
    year: '',
    nose: '',
    taste: '',
    finish: '',
    description: '',
    date: ''
  }

  $scope.submitReview = () => {

    $scope.review.date = new Date().toISOString();
    console.log($scope.review);
    $scope.listWhisky.push($scope.review);

    $scope.review = {
      name: '',
      image: '',
      year: '',
      nose: '',
      taste: '',
      finish: '',
      description: '',
      date: ''
    }

  };

}]);
