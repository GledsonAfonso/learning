import { useState } from 'react';
import { GameBoard } from './components/GameBoard/GameBoard';
import type { BoardGrid } from './components/GameBoard/types';
import { GameOver } from './components/GameOver/GameOver';
import { Log } from './components/Log/Log';
import { Player } from './components/Player/Player';
import { PLAYER_1, PLAYER_2, deriveActivePlayer } from './constants';
import type { GameTurn, PlayerName } from './types';
import { getWinner } from './utils/gameboard';

export const App = () => {
  const [playerNames, setPlayerNames] = useState<PlayerName>({
    [PLAYER_1]: 'Player 1',
    [PLAYER_2]: 'Player 2',
  });
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

  const winner = getWinner(gameBoard, gameTurns[0]);
  const winnerName = winner ? playerNames[winner] : '';
  const isDraw = gameTurns.length === 9 && !winner;

  const handleActivePlayerAction = (rowIndex: number, columnIndex: number) => {
    const currentPlayer = deriveActivePlayer(gameTurns);

    setGameTurns((previousTurns: GameTurn[]) => {
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

  const handleRestart = () => {
    setGameTurns(() => []);
  };

  const handlePlayerNames = (player: string, newPlayerName: string) => {
    setPlayerNames((previousPlayerNames) => ({
      ...previousPlayerNames,
      [player]: newPlayerName,
    }))
  };

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player
            initialName={playerNames[PLAYER_1]}
            symbol={PLAYER_1}
            isActive={activePlayer === PLAYER_1}
            onPlayerNameChange={handlePlayerNames}
          />
          <Player
            initialName={playerNames[PLAYER_2]}
            symbol={PLAYER_2}
            isActive={activePlayer === PLAYER_2}
            onPlayerNameChange={handlePlayerNames}
          />
        </ol>
        { (winner || isDraw) && <GameOver winner={winnerName} onRematchAction={handleRestart}/> }
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
