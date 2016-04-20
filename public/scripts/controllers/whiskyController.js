'use strict';

angular.module('myApp')

.controller('HomeController', ['$scope', 'fpWhiskyFactory', ($scope, fpWhiskyFactory) => {

  $scope.whiskies = fpWhiskyFactory.getWhiskies();

}])

.controller('whiskyController', ['$scope', '$http','fpWhiskyFactory', ($scope, $http, fpWhiskyFactory) => {

  $scope.sortByStuff = '';
  $scope.whiskyLists = [];

  $scope.whiskies = fpWhiskyFactory.getWhiskies();

  $http.get('/whiskies')
    .then((data) => {
      $scope.whiskyLists = data.data;
      console.log(data.data);
    }, (err) => {
      console.log(`Error: ${err}`);
    })

}])

.controller('whiskyDetailController', ['$scope', '$http', '$stateParams', 'fpWhiskyFactory', ($scope, $http, $stateParams, fpWhiskyFactory) => {

  $scope.whisky;
  let whiskyID = $stateParams.id;

  if (Number(whiskyID) < 10) {
    $scope.whisky = fpWhiskyFactory.getWhisky(parseInt(whiskyID, 10));
  }
  else {
    $http.get(`/whiskies/${whiskyID}`)
      .then((data) => {
        $scope.whisky = data.data;
        console.log(data);
      }, (err) => {
        console.log(`Error: ${err}`);
      })
  }

  $scope.deleteReview = () => {
    $http.delete(`/whiskies/${whiskyID}`)
      .then((data) => {
        $scope.whisky = data.data;
        console.log(data);
        alert(`Review ID: ${whiskyID} has been removed.`)
      }, (err) => {
        console.log(`Error: ${err}`);
      })
  };

}])

.controller('submitReviewController', ['$scope', '$http', ($scope, $http) => {

  $scope.review = {
    name: '',
    image: '',
    abv: '',
    price: '',
    year: '',
    nose: '',
    taste: '',
    finish: '',
    description: ''
  };

  $scope.submitReview = () => {

    console.log($scope.review);

    $http.post('/whiskies', $scope.review)
      .then((data) => {
        $scope.review = {
          name: '',
          image: '',
          abv: '',
          price: '',
          year: '',
          nose: '',
          taste: '',
          finish: '',
          description: ''
        };
      }, (err) => {
        console.log(`Error: ${err}`);
      });

    alert('Review Added');

  };

}]);
