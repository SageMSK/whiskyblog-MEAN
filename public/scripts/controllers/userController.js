(function () {
  'use strict';

  angular.module('myApp')

  .controller('loginController', ['$scope', ($scope) => {
    // Login Controller
    $scope.test = 'Login Controller Working'
  }])

  .controller('registerController', ['$scope', ($scope) => {
    // Register Controller
    $scope.test = 'Register Controller Working'
  }]);

})();
