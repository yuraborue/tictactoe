/*
	service with game logic
*/
angular.module('tictactoe')
.service('GameManager', function() {
	/*
		this.player
		Current player
			int(1) - X
			int(2) - O
	*/
	this.player = 1;

	/*
		this.winner
		Current game state
			int(1) - X winners
			int(2) - O winners
			int(-1) - tie game
			int(0) - game going 
	*/
	this.winner = 0;

	/* 
		getWinner
		Function to determine the state of the game
		returns the same value as this.winner
	*/
	var getWinner = function(board) {
		var size = board.length-1;
		var emptyCell = 0;
		var firstDiagonal = board[0][0];
		var secondDiagonal = board[size][0]
		for (var i = 0; i <= size; i++) {
			var row = board[i][0],
				column = board[0][i];
			for (var j = 1; j <= size; j++) {
				if (row != board[i][j])
					row = -1;
				if (column != board[j][i])
					column = -1;
				if (board[i][j] == 0)
					emptyCell++;
			}
			if (firstDiagonal != board[i][i])
				firstDiagonal = -1;
			if (secondDiagonal != board[size-i][i])
				secondDiagonal = -1;
			if (row > 0)
				return row;
			if (column > 0)
				return column;
		}

		if (firstDiagonal > 0)
			return firstDiagonal;
		if (secondDiagonal > 0)
			return secondDiagonal;
		if (emptyCell == 0)
			return -1;
		return 0;
	};

	/*
		start new game
	*/
	this.newGame = function(size) {
		size = size || 3;
		this.board = [];
	    for (var i = 0; i < size; i++) {
	    	this.board[i] = [];
	    	for (var j = 0; j < size; j++)
	    		this.board[i][j] = 0;
	    };
		this.player = 1;
		this.winner = 0;
		return true;		
	};

	/*
		Move in current game
		returns:
			bool(false) - failed
			boot(true)  - success
	*/
	this.move = function(row,cell) {
		if (this.board[row][cell] != 0)
			return false;
		if (this.winner > 0)
			return false;
		this.board[row][cell] = this.player;
		this.player = (this.player == 1) ? 2 : 1;
		this.winner = getWinner(this.board);
		return true;
	};
});
