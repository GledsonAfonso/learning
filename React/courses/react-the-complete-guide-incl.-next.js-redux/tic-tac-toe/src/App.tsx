import { useState } from 'react';
import { GameBoard } from './components/GameBoard/GameBoard';
import { Player } from './components/Player/Player';

export const App = () => {
  const [activePlayer, setActivePlayer] = useState('X');

  const handleActivePlayerAction = () => {
    setActivePlayer(currentActivePlayer => currentActivePlayer === 'X' ? 'O' : 'X');
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
          activePlayerSymbol={activePlayer}
          onActivePlayerAction={handleActivePlayerAction}
        />
      </div>
      LOG 
    </main>
  );
};
