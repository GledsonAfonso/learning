import type { GameBoardProps } from './types';

export const GameBoard = ({
  gameBoard,
  onActivePlayerAction,
}: GameBoardProps) => {
  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button disabled={playerSymbol !== null} onClick={() => onActivePlayerAction(rowIndex, columnIndex)}>{playerSymbol}</button>
              </li>
            ))
            }
          </ol>
        </li>
      ))}
    </ol>
  );
};
