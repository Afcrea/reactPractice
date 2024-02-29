import React, { useState, useEffect } from 'react';

const Stopwatchtest = () => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalID;

    if (isRunning) {
      setStartTime(Date.now() - elapsedTime);

      intervalID = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [isRunning, elapsedTime, startTime]);

  const formatTime = (milliseconds) => {
    const date = new Date(milliseconds);
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const millisecondsFormatted = date.getUTCMilliseconds().toString().padStart(3, '0');
    return `${minutes}:${String(seconds).padStart(2, '0')}.${millisecondsFormatted}`;
  };

  const updateDisplay = () => {
    return formatTime(elapsedTime);
  };

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const stopStopwatch = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  return (
    <div>
      <h1>{updateDisplay()}</h1>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default Stopwatchtest;
