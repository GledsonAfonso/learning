import { useState } from "react";
import BoardRow from "./BoardRow";

export default function Board() {
  const size = 3;

  const [previousMark, setPreviousMark] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [matrix, setMatrix] = useState(Array(size).fill(null).map(() => Array(size).fill("")));
  const [saveStates, setSaveStates] = useState([ JSON.stringify({ previousMark, isGameOver, matrix }) ]);

  const saveState = () => {
    const currentState = {
      previousMark: getXOBasedOnPreviousMark(),
      isGameOver: isGameOver,
      matrix: matrix
    };

    setSaveStates(() => [...saveStates, JSON.stringify(currentState)]);
  };

  const getXOBasedOnPreviousMark = () => {
    if (["", "O"].includes(previousMark)) {
      return "X";
    } else {
      return "O";
    }
  };

  const verifyDiagonal = ({ isMajorDiagonal = true, mark }) => {
    const auxArray = Array(size).fill(null);
    return auxArray
      .map((_, index) => isMajorDiagonal ? matrix[index][index] : matrix[index][auxArray.length - 1 - index])
      .every(it => it === mark);
  };

  const isDiagonalWinner = (row, column, mark) => {
    const isXYEqual = row === column;
    const isUpperCorner = (row === 0) && (column === (size - 1));
    const isLowerCorner = (column === 0) && (row === (size - 1));

    if (isXYEqual || isUpperCorner || isLowerCorner) {
      return verifyDiagonal({ isMajorDiagonal: true, mark }) || verifyDiagonal({ isMajorDiagonal: false, mark });
    }

    return false;
  }

  const isColumnWinner = (column, mark) => matrix.every(row => row[column] === mark);

  const isRowWinner = (row, mark) => matrix[row].every(it => it === mark);

  const isWinner = (row, column) => {
    const mark = matrix[row][column];
    return isDiagonalWinner(row, column, mark) || isRowWinner(row, mark) || isColumnWinner(column, mark);
  };

  const handleClick = (row, column) => {
    if (matrix[row][column] === "" && !isGameOver) {
      matrix[row][column] = getXOBasedOnPreviousMark();

      setPreviousMark(matrix[row][column]);
      setMatrix(matrix);
      setIsGameOver(isWinner(row, column));
      saveState();
    }
  };

  const returnToPreviousState = () => {
    const lastSaveStateIndex = saveStates.length - 2;

    if (lastSaveStateIndex >= 0) {
      const previousState = JSON.parse(saveStates[lastSaveStateIndex]);

      setPreviousMark(previousState.previousMark);
      setIsGameOver(previousState.isGameOver);
      setMatrix(previousState.matrix);
      setSaveStates(() => saveStates.slice(0, saveStates.length - 1));
    }
  };

  return <>
    <div className="board">
      {
        matrix.map((_, index) => {
          return <BoardRow
            key={index}
            row={index}
            matrix={matrix}
            onSquareClickHandler={handleClick}
          />
        })
      }
      <button onClick={() => returnToPreviousState()}>{"<-"}</button>
    </div>
    {isGameOver && <p>Winner: {previousMark}</p>}
  </>
}