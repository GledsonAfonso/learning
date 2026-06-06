import type { GameTurn } from "./types";

export const PLAYER_1: string = 'X';
export const PLAYER_2: string = 'O';

export const deriveActivePlayer = (gameTurns: GameTurn[]): string => {
  let currentPlayer = PLAYER_1;

  if (gameTurns[0]?.player === PLAYER_1) {
    currentPlayer = PLAYER_2;
  }

  return currentPlayer;
};
