export class GameView {
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

  render(gameStatus: any) {
    if (gameStatus.isGameOver) return;

    console.log(gameStatus.moves);
  }
}
