import type { GameOverProps } from './types';

export const GameOver = ({
  winner,
  onRematchAction
}: GameOverProps) => {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      <p>{winner ? `${winner} won` : 'It\'s a draw'}!</p>
      <p><button onClick={onRematchAction}>Rematch!</button></p>
    </div>
  );
};
