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
    const { moves } = gameStatus;

    Object.entries(moves).forEach(([position, symbol]: [string, any]) => {
      const index: number = parseInt(position);
      this.#cells[index].innerText = symbol;
    });
  }
}
