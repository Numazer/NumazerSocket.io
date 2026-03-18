// Back/games/Puissance4.js
export class Puissance4 {
  constructor() {
    this.board = Array.from({ length: 6 }, () => Array(7).fill(null));
    this.currentPlayer = "red";
    this.winner = null;
  }

  play(col) {
    // stub simple pour que le test "dépose un jeton" puisse fonctionner plus tard
    for (let row = 5; row >= 0; row--) {
      if (this.board[row][col] === null) {
        this.board[row][col] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === "red" ? "yellow" : "red";
        return true;
      }
    }
    return false; // colonne pleine
  }
}