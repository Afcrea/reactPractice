export function Moves ( { history, onClickhandle } ) {
  let description;
  
  return (
    <>
    <div>
      <ol>
      {history.map((squares, move) => {
        if (move > 0) {
          description = 'Go to move #' + move;
        } else {
          description = 'Go to game start';
        }
        return (<li key={move}>
          <button onClick={() => onClickhandle(move)}>{description}</button>
        </li>)
      })}
      </ol>
    </div>
    </>
  );
}