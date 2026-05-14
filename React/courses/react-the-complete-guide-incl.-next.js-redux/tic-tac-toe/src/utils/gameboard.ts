import type { BoardGrid } from "../components/GameBoard/types";

const isDiagonal = (columnIndex: number, lineIndex: number, indexLimit: number): boolean =>
  (columnIndex === lineIndex) ||
  (columnIndex === 0 && lineIndex === indexLimit) ||
  (lineIndex === 0 && columnIndex === indexLimit);
const isInvertedDiagonal = (columnIndex: number, lineIndex: number): boolean => columnIndex === lineIndex;

export const isWinner = (
	columnIndex: number,
	lineIndex: number,
  player: string,
  gameBoard: BoardGrid,
): boolean => {
  const indexLimit = gameBoard.length - 1;
  let linePlayerCount = 0;
  let columnPlayerCount = 0;
  let diagonalPlayerCount = 0;
  let invertedDiagonalPlayerCount = 0;

  for (let j = 0; j < indexLimit; j++) {
    if (gameBoard[lineIndex][j] === player) {
      linePlayerCount++;
    }
  }

  if (linePlayerCount === indexLimit) {
    return true;
  }

  for (let i = 0; i < indexLimit; i++) {
    if (gameBoard[i][columnIndex] === player) {
      columnPlayerCount++;
    }
  }

  if (columnPlayerCount === indexLimit) {
    return true;
  }

  if (isInvertedDiagonal(columnIndex, lineIndex)) {
    for (let i = 0; i < indexLimit; i++) {
      if (gameBoard[i][i] === player) {
        invertedDiagonalPlayerCount++;
      }
    }
  }

  if (invertedDiagonalPlayerCount === indexLimit) {
    return true;
  }

  if (isDiagonal(columnIndex, lineIndex, indexLimit)) {
    for (let i = 0; i < indexLimit; i++) {
      for (let j = 0; j < indexLimit; j++) {
        if (isDiagonal(i, j, indexLimit)) {
          if (gameBoard[i][j] === player) {
            diagonalPlayerCount++;
          }
        }
      }
    }
  }

  if (diagonalPlayerCount === indexLimit) {
    return true;
  }

  return false;
};
