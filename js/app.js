var randomIndex = Math.floor(Math.random() * quotes.length);
var selectedQuote = quotes[randomIndex];

function QuoteController($scope) {
  $scope.quote = selectedQuote;
}