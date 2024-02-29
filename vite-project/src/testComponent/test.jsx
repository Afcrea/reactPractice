import React, { useState } from 'react';

// console.log(`
// ⠀⠀⣰⡶⡆⢀⡶⣶⠀⠀⢰⡶⣶⠀⠀⢠⡶⠶⣦⠀⠀⢰⡶⣶⠀⠀⢰⣶⡆⣶⠀⣰⡶⢶⣄⠀
// ⠀⠀⣺⡇⣿⢸⡇⣿⠀⠀⣾⡇⢿⡇⠀⠘⠿⣦⣌⠀⠀⣾⡇⢿⡇⠀⢸⡇⢿⡿⠀⣿⠆⣬⣅⠀
// ⠀⠀⢾⡇⢹⣾⠀⣿⠂⢠⣿⠷⢿⣧⠀⢰⣖⣨⣿⠂⠠⣿⠷⢿⣧⠀⢸⡇⠸⣿⠀⢿⣇⣸⡗⠀

// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠲⠄⠀⡴⢢ ⠀⣶⠒⠀⠐⢶⠲⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣬⢻⠆⠀⣯⣸ ⠀⣟⠚⠀⠀⢸⠀⠀⠀⠀⠠⠀⠠⠀⠀⠀⡀⠀
// ⠠⠀⠀⠀⠁⠀⠀⠠⠀⠀ ⠀⠈⠁⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠈⠀⠀⠀⠄⠀⠀⠀⠀⠀⡀⠀⠀

//               PLAY, ENJOY, DREAM
//              또 하나의 즐거운 세상 !                 
//                           `)

import '../App.css'

import { BottomText } from "./BottomText";
import { initialBoard, CreateBoard } from './CreateBoard';
import { Moves } from './Moves';

const TwoDimensionalArrayWithButtons = () => {

  const initialArray = initialBoard(3, 3);

  const [array, setArray] = useState(initialArray);
  const [prevArray, setPrevArray] = useState([]);
  const [round, setRound] = useState(0);
  const Xturn = round % 2 === 0;
  const [status, setStatus] = useState('Next player: O');

  // board button event
  const handleButtonClick = (rowIndex, colIndex) => {
    const tempArray = array;

    if (tempArray[rowIndex][colIndex] !== null) {
      return;
    }

    if (isEnd(tempArray)) {
      return;
    }

    const tempPrevArray = [...prevArray, JSON.parse(JSON.stringify(tempArray))];
    tempArray[rowIndex][colIndex] = (Xturn ? 'O' : 'X');
    setArray(tempArray);
    setPrevArray(tempPrevArray);
    if (isEnd(tempArray)) {
      setStatus('Winner: ' + isEnd(tempArray));
    } else {
      const iRound = round + 1;
      setRound(iRound);
      if (iRound % 2 === 0) {
        setStatus('Next player: ' + 'O');
      }
      else {
        setStatus('Next player: ' + 'X');
      }
    }
  };

  // history button event
  function jumpTo(move) {
    setRound(move);
    let TempPrevArray = [];
    for (var i = 0; i < move; i++) {
      TempPrevArray = [...TempPrevArray, prevArray[i]];
    }
    if (move % 2 === 0) {
      setStatus('Next player: ' + 'O');
    }
    else {
      setStatus('Next player: ' + 'X');
    }
    let TempArray = prevArray[i];

    setArray(TempArray);
    setPrevArray(TempPrevArray);
    console.log(round, "round");
  }

  return (
    <>
      <div className="game">
        <CreateBoard board={array} onClickhandle={handleButtonClick}/>
        <div className="game-info">
          <BottomText status={status} />
          <Moves history={prevArray} onClickhandle={jumpTo}/>
        </div>
      </div>
    </>
  );
};

export default TwoDimensionalArrayWithButtons;

function isEnd(board) {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== null) {
      return board[i][0]; // 승자가 나타남
    }
  }

  // 열 확인
  for (let j = 0; j < 3; j++) {
    if (board[0][j] === board[1][j] && board[0][j] === board[2][j] && board[0][j] !== null) {
      return board[0][j]; // 승자가 나타남
    }
  }

  // 대각선 확인
  if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== null) {
    return board[0][0]; // 승자가 나타남
  }
  if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== null) {
    return board[0][2]; // 승자가 나타남
  }

  if (isDraw(board)) {
    return 'No one / Draw';
  }

  return false;
}

function isDraw(board) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === null) {
        return false;
      }
    }
  }
  return true;
}