export class Game {
    players;
    winner;
    constructor(players) {
        this.players = players;
    }
    isGameOver() {
        return this.players.totalMovesMade() >= 9;
    }
    makeMove(move) {
        this.players.recordMove(move);
        if (this.isGameOver()) {
            this.winner = this.players.getCurrentPlayer();
            return;
        }
        this.players.changeTurn();
    }
    status() {
        return {
            moves: this.players.movesMade(),
            currentPlayer: this.players.getCurrentPlayer(),
            isGameOver: this.isGameOver(),
            winner: this.winner,
        };
    }
}
