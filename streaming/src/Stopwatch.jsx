import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  let intcurr = null;
  const [currentTime, setCurrentTime] = useState(0);

  function handleStart() {
    // 중복 클릭 방지
    if(startTime !== now) {
        clearInterval(intcurr);
        return;
    }
    setStartTime(Date.now());
    setNow(Date.now());
    
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    // 중복 클릭 방지
    if (now - startTime == 0) {
        return;
    }

    // 정지
    clearInterval(intervalRef.current);

    // 정지 시간 유지
    setCurrentTime(currentTime + Date.now() - startTime);
    setStartTime(Date.now());
    setNow(Date.now());
  }

  function handleReset() {
    setCurrentTime(0.0);
    setStartTime(Date.now());
    setNow(Date.now());
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (currentTime + now - startTime) / 1000;
  }

//   if(secondsPassed > 2) {
//     // clearInterval(intervalRef.current);
//     clearInterval(intcurr);
//   }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
      <h1>{now - startTime}</h1>
      <h1>{now}</h1>
      <h1>{startTime}</h1>
      <h1>{currentTime}</h1>
    </>
  );
}

