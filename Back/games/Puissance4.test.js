import { describe, it, expect } from "vitest";
import { Puissance4 } from "./Puissance4.js";

describe("Puissance4 - logique métier (TDD)", () => {

  it("initialise une grille de 6x7 et le joueur courant", () => {
    // On imagine que la classe existera
    const game = new Puissance4();
    expect(game.board.length).toBe(6);
    expect(game.board[0].length).toBe(7);
    expect(game.currentPlayer).toBe("red");
    expect(game.winner).toBe(null);
  });

  it("dépose un jeton dans la colonne la plus basse", () => {
    const game = new Puissance4();
    game.play(0);
    expect(game.board[5][0]).toBe("red");
  });

  it("alterne les joueurs après chaque coup", () => {
    const game = new Puissance4();
    game.play(0); // red
    game.play(1); // yellow
    expect(game.board[5][0]).toBe("red");
    expect(game.board[5][1]).toBe("yellow");
  });

  it("rejette un coup si la colonne est pleine", () => {
    const game = new Puissance4();
    for (let i = 0; i < 6; i++) game.play(0);
    const result = game.play(0);
    expect(result).toBe(false);
  });

  it("détecte une victoire verticale", () => {
    const game = new Puissance4();
    game.play(0); game.play(1);
    game.play(0); game.play(1);
    game.play(0); game.play(1);
    game.play(0);
    expect(game.winner).toBe("red");
  });

  it("ne permet pas de jouer après victoire", () => {
    const game = new Puissance4();
    game.play(0); game.play(1);
    game.play(0); game.play(1);
    game.play(0); game.play(1);
    game.play(0);
    const result = game.play(2);
    expect(result).toBe(false);
  });

});