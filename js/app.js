var randomIndex = Math.floor(Math.random() * quotes.length);
var selectedQuote = quotes[randomIndex];

// function QuoteController($scope) {
//   $scope.quote = selectedQuote;
// }

(function(angular) {
  'use strict';
angular.module('myApp', ['ngSanitize'])
  .controller('QuoteController', ['$scope', function($scope) {
    
    $scope.quote = selectedQuote;

  }]);
})(window.angular);