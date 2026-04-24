import { useState } from 'react';
import { GameBoard } from './components/GameBoard/GameBoard';
import type { BoardGrid, GameTurn } from './components/GameBoard/types';
import { Log } from './components/Log/Log';
import { Player } from './components/Player/Player';

const deriveActivePlayer = (gameTurns: GameTurn[]): string => {
  let currentPlayer = 'X';

  if (gameTurns[0]?.player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
};

export const App = () => {
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard: BoardGrid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  for (const turn of gameTurns) {
    gameBoard[turn.square.row][turn.square.column] = turn.player;
  }

  const handleActivePlayerAction = (rowIndex: number, columnIndex: number) => {
    setGameTurns((previousTurns: GameTurn[]) => {
      let currentPlayer = deriveActivePlayer(previousTurns);

      const updatedTurns: GameTurn[] = [
        {
          square: {
            row: rowIndex,
            column: columnIndex,
          },
          player: currentPlayer,
        },
        ...previousTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player
            initialName='Player 1'
            symbol='X'
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName='Player 2'
            symbol='O'
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard
          gameBoard={gameBoard}
          onActivePlayerAction={handleActivePlayerAction}
        />
      </div>
      <Log
        turns={gameTurns}
      />
    </main>
  );
};
