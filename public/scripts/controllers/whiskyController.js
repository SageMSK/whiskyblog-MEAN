'use strict';

angular.module('myApp')

.controller('MainController', ['$scope', 'whiskyFactory', ($scope, whiskyFactory) => {

  $scope.whiskies = whiskyFactory.getWhiskies();

}])

.controller('whiskyDetailController', ['$scope', '$stateParams', 'whiskyFactory', ($scope, $stateParams, whiskyFactory) => {
  //
  $scope.whisky = whiskyFactory.getWhisky(parseInt($stateParams.id, 10));
  // $scope.whisky = whiskyFactory.getWhisky(2);

}]);
