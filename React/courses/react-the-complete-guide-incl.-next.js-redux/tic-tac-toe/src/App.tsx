import { useState } from 'react';
import { GameBoard } from './components/GameBoard/GameBoard';
import type { GameTurn } from './components/GameBoard/types';
import { Log } from './components/Log/Log';
import { Player } from './components/Player/Player';

const deriveActivePlayer = (gameTurns: GameTurn[]) => {
  let currentPlayer = 'X';

  if (gameTurns[0]?.player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
};

export const App = () => {
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
  const activePlayer = deriveActivePlayer(gameTurns);

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
          turns={gameTurns}
          onActivePlayerAction={handleActivePlayerAction}
        />
      </div>
      <Log
        turns={gameTurns}
      />
    </main>
  );
};
