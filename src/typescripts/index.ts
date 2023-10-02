import { Game } from "../../public/typescripts/game.js";
import { GameController } from "../../public/typescripts/game-controller.js";
import { GameView } from "../../public/typescripts/game-view.js";
import { Player, Symbol } from "../../public/typescripts/player.js";
import { Players } from "../../public/typescripts/players.js";

const main = () => {
  const p1 = new Player("biswa", Symbol.X);
  const p2 = new Player("qasim", Symbol.O);
  const players = new Players(p1, p2);
  const game = new Game(players);
  const gc = new GameController(game, new GameView());
  gc.start();
};

main();
