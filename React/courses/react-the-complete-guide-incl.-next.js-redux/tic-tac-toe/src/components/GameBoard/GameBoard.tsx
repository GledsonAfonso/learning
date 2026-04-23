import type { BoardGrid, GameBoardProps } from './types';

const initialGameBoard: BoardGrid = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const GameBoard = ({
  turns,
  onActivePlayerAction,
}: GameBoardProps) => {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    gameBoard[turn.square.row][turn.square.column] = turn.player;
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={() => onActivePlayerAction(rowIndex, columnIndex)}>{playerSymbol}</button>
              </li>
            ))
            }
          </ol>
        </li>
      ))}
    </ol>
  );
};
