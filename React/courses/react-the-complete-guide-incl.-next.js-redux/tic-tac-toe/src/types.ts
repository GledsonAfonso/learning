import type { PLAYER_1, PLAYER_2 } from "./constants";

interface GameBoardSquare {
  row: number;
  column: number;
}

export interface GameTurn {
  square: GameBoardSquare;
  player: string;
}

export interface PlayerName {
  [PLAYER_1]: string;
  [PLAYER_2]: string;
}