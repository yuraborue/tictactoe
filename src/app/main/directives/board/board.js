angular.module('tictactoe')
.directive('board', function() {
  return {
    restrict: 'E',
    link : function($scope, element, attr) {
    	$scope.boxSize = element.width()/$scope.ngModel.length + 'px';
    	$scope.boardSize = element.width() + 'px';
    },
    scope: {
      ngModel: '=',
      ngMove: '='
    },
    templateUrl: 'app/main/directives/board/board.html'
  };
});