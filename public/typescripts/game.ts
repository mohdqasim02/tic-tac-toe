import { Move, Player } from "./player";
import { Players } from "./players";

export class Game {
  private players: Players;
  private winner: string | undefined;

  constructor(players: Players) {
    this.players = players;
  }

  isGameOver() {
    return this.players.totalMovesMade() === 9;
  }

  makeMove(move: Move) {
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
