// Back/games/Puissance4.js
export class Puissance4 {
  constructor() {
    this.rows = 6;
    this.cols = 7;
    this.board = Array.from({ length: this.rows }, () => Array(this.cols).fill(null));
    this.currentPlayer = "red"; // "red" commence
    this.winner = null;
  }

  // jouer dans une colonne
  play(col) {
    if (this.winner) return false; // interdit de jouer si victoire déjà détectée
    if (col < 0 || col >= this.cols) return false;

    // chercher la ligne vide la plus basse
    for (let row = this.rows - 1; row >= 0; row--) {
      if (this.board[row][col] === null) {
        this.board[row][col] = this.currentPlayer;

        // vérifier victoire
        if (this.checkWin(row, col)) {
          this.winner = this.currentPlayer;
        }

        // alterner joueur
        this.currentPlayer = this.currentPlayer === "red" ? "yellow" : "red";
        return true;
      }
    }

    return false; // colonne pleine
  }

  // vérifier victoire
  checkWin(row, col) {
    const directions = [
      [[0, 1], [0, -1]],   // horizontal
      [[1, 0], [-1, 0]],   // vertical
      [[1, 1], [-1, -1]],  // diagonale \
      [[1, -1], [-1, 1]]   // diagonale /
    ];

    const player = this.board[row][col];

    for (const [[dx1, dy1], [dx2, dy2]] of directions) {
      let count = 1;
      count += this.countDirection(row, col, dx1, dy1, player);
      count += this.countDirection(row, col, dx2, dy2, player);

      if (count >= 4) return true;
    }
    return false;
  }

  // compter jetons consécutifs dans une direction
  countDirection(row, col, dx, dy, player) {
    let r = row + dx;
    let c = col + dy;
    let count = 0;

    while (r >= 0 && r < this.rows && c >= 0 && c < this.cols && this.board[r][c] === player) {
      count++;
      r += dx;
      c += dy;
    }

    return count;
  }
}