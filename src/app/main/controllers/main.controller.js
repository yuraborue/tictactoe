'use strict';
angular.module('tictactoe')
  .controller('MainCtrl', function ($scope, GameManager) {
    this.dimension = 3;
    this.GameManager = GameManager;
    this.newGame = function() {
      this.GameManager.newGame(this.dimension);
    }
    this.newGame();
    this.move = this.GameManager.move.bind(this.GameManager);
  });
