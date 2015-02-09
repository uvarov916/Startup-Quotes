var randomIndex = Math.floor(Math.random() * quotes.length);
var selectedQuote = quotes[randomIndex];

selectedQuote.number = '#' + selectedQuote.number;
selectedQuote.category = '#' + selectedQuote.category;

function QuoteController($scope) {
  $scope.quote = selectedQuote;
}