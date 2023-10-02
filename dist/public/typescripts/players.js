export class Players {
    players;
    constructor(player1, player2) {
        this.players = [player1, player2];
    }
    changeTurn() {
        this.players.reverse();
    }
    recordMove(move) {
        this.players[0].recordMove(move);
    }
    getCurrentPlayer() {
        return this.players[0].getDetails();
    }
    totalMovesMade() {
        return this.players
            .map(player => player.numberOfMovesMade())
            .reduce((a, b) => a + b);
    }
    movesMade() {
        return Object.fromEntries(this.players.flatMap(player => player.movesMade()));
    }
}
