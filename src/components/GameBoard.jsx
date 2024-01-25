import { useState } from "react";

const initialGAmeBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
//  const [gameBoard, setGameBoard] = useState(initialGAmeBoard);

//  function handleSelectSquare(rowIndex, colIndex) {
//   setGameBoard((prevGameBoard) => {
//     const upddatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
//     upddatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//     return upddatedBoard;
//   });

//   onSelectSquare();

//  }

return (
  <ol id="game-board">
    {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
      <ol>
        {row.map((playerSymbol, colIndex) => (
        <li key={colIndex}>
          <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
        </li>))}
      </ol>
    </li>)}
  </ol>
);
}