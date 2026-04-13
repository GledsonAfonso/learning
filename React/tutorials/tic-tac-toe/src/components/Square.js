export default function Square({ row, column, matrix, onSquareClickHandler }) {
  return <button onClick={() => onSquareClickHandler(row, column)} className="square">{ matrix[row][column] }</button>;
}