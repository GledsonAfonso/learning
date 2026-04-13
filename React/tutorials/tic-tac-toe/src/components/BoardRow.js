import Square from "./Square";

export default function BoardRow({ row, matrix, onSquareClickHandler }) {
  return <div className="board-row">
    {
      matrix[row].map((_, index) => {
        return <Square
          key={index}
          row={row}
          column={index}
          matrix={matrix}
          onSquareClickHandler={onSquareClickHandler}
        />
      })
    }
  </div>
}