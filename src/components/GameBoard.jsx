export default function GameBoard({ onSelectSquare, board }) {

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
    {board.map((row, rowIndex) => <li key={rowIndex}>
      <ol>
        {row.map((playerSymbol, colIndex) => (
        <li key={colIndex}>
          <button onClick={() => onSelectSquare(rowIndex, colIndex)}
            disabled={playerSymbol !== null}
          >
            {playerSymbol}
          </button>
        </li>))}
      </ol>
    </li>)}
  </ol>
);
}