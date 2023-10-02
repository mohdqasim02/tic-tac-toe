import { Game } from "./game.js";
import { GameController } from "./game-controller.js";
import { GameView } from "./game-view.js";
import { Player, Symbol } from "./player.js";
import { Players } from "./players.js";
const main = () => {
    const p1 = new Player("biswa", Symbol.X);
    const p2 = new Player("qasim", Symbol.O);
    const players = new Players(p1, p2);
    const game = new Game(players);
    const gc = new GameController(game, new GameView());
    gc.start();
};
window.onload = main;
