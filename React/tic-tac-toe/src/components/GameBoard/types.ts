export type RowValue = string | null;
type Row = [RowValue, RowValue, RowValue];
export type BoardGrid = [Row, Row, Row];

export interface GameBoardProps {
  gameBoard: BoardGrid;
  onActivePlayerAction: (rowIndex: number, columnIndex: number) => void;
};
