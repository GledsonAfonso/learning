export interface PlayerProps {
  initialName: string;
  symbol: string;
  isActive: boolean;
  onPlayerNameChange: (player: string, newPlayerName: string) => void;
};
