export function initialBoard(row, col) {
  let initialArray = [];
  let Board = [];

  for (var i = 0; i < row; i++){
    for (var j = 0; j < col; j++){
      initialArray[j] = null;
    }
    // initialArray 깊은 복사
    Board[i] = [...initialArray];
  }
  
  return Board;
}

export function CreateBoard( {board, onClickhandle} ) {
  return (
    <div className="game-info">
          {board.map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.map((value, colIndex) => (
                <button key={colIndex} onClick={() => onClickhandle(rowIndex, colIndex)}>
                  {value}
                </button>
              ))}
            </div>
          ))}
    </div>
  );
}