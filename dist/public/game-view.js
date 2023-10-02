"use strict";
class GameView {
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
}
window.onload = () => {
    new GameView().start();
};
