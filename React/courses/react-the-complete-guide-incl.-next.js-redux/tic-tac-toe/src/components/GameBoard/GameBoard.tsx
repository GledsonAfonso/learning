import { useState } from 'react';
import type { BoardGrid } from './types';

const initialGameBoard: BoardGrid = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleButtonClick = (
    rowIndex: number,
    columnIndex: number,
  ) => {
    setGameBoard((previousGameBoard) => {
      const updatedGameBoard = [...previousGameBoard.map(innerRow => [...innerRow])] as BoardGrid;
      updatedGameBoard[rowIndex][columnIndex] = 'X';
      return updatedGameBoard;
    });
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={() => handleButtonClick(rowIndex, columnIndex)}>{playerSymbol}</button>
              </li>
            ))
            }
          </ol>
        </li>
      ))}
    </ol>
  );
};
