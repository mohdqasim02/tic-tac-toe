import { GameView } from "./game-view";
import { Game } from "./game";
import { Move } from "./player";

export class GameController {
  private game: Game;
  private gameView: GameView;

  constructor(game: Game, gameView: GameView) {
    this.game = game;
    this.gameView = gameView;
  }

  start() {
    this.gameView.start((move: Move) => {
      this.game.makeMove(move);
      this.gameView.render(this.game.status());
    });
  }
}
