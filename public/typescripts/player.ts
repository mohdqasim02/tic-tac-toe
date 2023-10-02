export enum Symbol {
  X = "X",
  O = "O",
}

export type Move = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export class Player {
  private moves: number[];
  private readonly name: string;
  private readonly symbol: Symbol;

  constructor(name: string, symbol: Symbol) {
    this.moves = [];
    this.name = name;
    this.symbol = symbol;
  }

  recordMove(move: Move) {
    this.moves.push(move);
  }

  getDetails() {
    return this.name;
  }

  numberOfMovesMade() {
    return this.moves.length;
  }

  movesMade() {
    return [...this.moves].map(move => [move, this.symbol]);
  }
}
