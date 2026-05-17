export type RowValue = string | null;
type Row = [RowValue, RowValue, RowValue];
export type BoardGrid = [Row, Row, Row];

interface GameBoardSquare {
  row: number;
  column: number;
}

export interface GameTurn {
  square: GameBoardSquare;
  player: string;
  isWinner: boolean;
}

export interface GameBoardProps {
  gameBoard: BoardGrid;
  onActivePlayerAction: (rowIndex: number, columnIndex: number) => void;
};
