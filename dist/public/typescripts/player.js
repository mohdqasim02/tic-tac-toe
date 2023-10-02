export var Symbol;
(function (Symbol) {
    Symbol["X"] = "X";
    Symbol["O"] = "O";
})(Symbol || (Symbol = {}));
export class Player {
    moves;
    name;
    symbol;
    constructor(name, symbol) {
        this.moves = [];
        this.name = name;
        this.symbol = symbol;
    }
    recordMove(move) {
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
