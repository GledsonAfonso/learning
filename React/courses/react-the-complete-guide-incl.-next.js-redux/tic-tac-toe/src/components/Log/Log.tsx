import type { LogProps } from './types';

export const Log = ({
  turns,
}: LogProps) => {
  return (
    <ol id='log'>
      {
        turns.map(turn => {
          const player = turn.player;
          const position = `${turn.square.column},${turn.square.row}`;

          return (
            <li key={position}>{player} selected {position}</li>
          );
        })
      }
    </ol>
  );
};
