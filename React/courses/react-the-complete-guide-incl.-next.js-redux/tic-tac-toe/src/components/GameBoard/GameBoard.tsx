import { useState } from 'react';
import type { BoardGrid, GameBoardProps } from './types';

const initialGameBoard: BoardGrid = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const GameBoard = ({
  activePlayerSymbol,
  onActivePlayerAction,
}: GameBoardProps) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleButtonClick = (
    rowIndex: number,
    columnIndex: number,
  ) => {
    setGameBoard((currentGameBoard) => {
      const updatedGameBoard = [...currentGameBoard.map(innerRow => [...innerRow])] as BoardGrid;
      updatedGameBoard[rowIndex][columnIndex] = activePlayerSymbol;
      return updatedGameBoard;
    });

    onActivePlayerAction();
  };

  return (
    <ol id='game-board'>
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
