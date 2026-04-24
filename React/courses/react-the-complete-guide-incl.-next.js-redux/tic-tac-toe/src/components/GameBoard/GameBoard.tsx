import type { BoardGrid, GameBoardProps } from './types';

export const GameBoard = ({
  turns,
  onActivePlayerAction,
}: GameBoardProps) => {
  const gameBoard: BoardGrid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

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
