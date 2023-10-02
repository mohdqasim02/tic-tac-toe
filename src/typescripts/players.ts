import { Move, Player } from "../../public/typescripts/player";

export class Players {
  private players: Player[];

  constructor(player1: Player, player2: Player) {
    this.players = [player1, player2];
  }

  changeTurn() {
    this.players.reverse();
  }

  recordMove(move: Move) {
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
    return Object.fromEntries(
      this.players.flatMap(player => player.movesMade())
    );
  }
}
