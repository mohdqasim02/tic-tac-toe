export class GameView {
    #cells;
    #gameBoard;
    constructor() {
        this.#gameBoard = document.querySelector("#game-board");
        this.#cells = [...document.querySelectorAll(".cell")];
    }
    #setupCells(makeMove) {
        this.#cells.forEach((cell, index) => {
            cell.onclick = () => makeMove(index);
        });
    }
    start(makeMove = console.log) {
        this.#setupCells(makeMove);
    }
    render(gameStatus) {
        if (gameStatus.isGameOver)
            return;
        console.log(gameStatus.moves);
    }
}
