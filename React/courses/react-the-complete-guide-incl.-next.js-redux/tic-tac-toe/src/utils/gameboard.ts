import type { BoardGrid, GameTurn, RowValue } from "../components/GameBoard/types";

export const getWinner = (
  gameBoard: BoardGrid,
  lastTurn?: GameTurn,
): string | undefined => {
  if(!lastTurn) {
    return;
  }

  const {column: columnIndex, row: rowIndex} = lastTurn.square;
  const player = lastTurn.player

  const rowValidation = gameBoard[rowIndex].every(value => value === player);
  if (rowValidation) {
    return player;
  }

  const columnValidation = gameBoard.map(row => row[columnIndex]).every(value => value === player);
  if (columnValidation) {
    return player;
  }

  let invertedDiagonalArray: RowValue[] = new Array(gameBoard.length).fill(null);
  for (let index = 0; index < gameBoard.length; index++) {
    invertedDiagonalArray[index] = gameBoard[index][index];
  }
  if (invertedDiagonalArray.every(value => value === player)) {
    return player;
  }

  let diagonalArray: RowValue[] = new Array(gameBoard.length).fill(null);
  let diagonalRowIndex = gameBoard.length - 1;
  for (let index = 0; index < gameBoard.length; index++) {
    diagonalArray[index] = gameBoard[diagonalRowIndex][index];
    diagonalRowIndex--;
  }
  if (diagonalArray.every(value => value === player)) {
    return player;
  }
};
