import { useState } from 'react';
import { GameBoard } from './components/GameBoard/GameBoard';
import type { GameTurn } from './components/GameBoard/types';
import { Player } from './components/Player/Player';

export const App = () => {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);

  const handleActivePlayerAction = (rowIndex: number, columnIndex: number) => {
    setActivePlayer(currentActivePlayer => currentActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((previousTurns: GameTurn[]) => {
      let currentPlayer = 'X';

      if (previousTurns[0]?.player === 'X') {
        currentPlayer = 'O';
      }

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
      LOG 
    </main>
  );
};
