class GameView {
  #cells;
  #gameBoard;

  constructor() {
    this.#gameBoard = document.querySelector("#game-board");
    this.#cells = [...document.querySelectorAll(".cell")] as HTMLElement[];
  }

  #setupCells(makeMove: Function) {
    this.#cells.forEach((cell: HTMLElement, index) => {
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
