export class GameController {
    game;
    gameView;
    constructor(game, gameView) {
        this.game = game;
        this.gameView = gameView;
    }
    start() {
        this.gameView.start((move) => {
            this.game.makeMove(move);
            this.gameView.render(this.game.status());
        });
    }
}
