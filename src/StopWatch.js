import React, { useState, useEffect } from 'react';

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let id;

    if (isRunning && !isPaused) {
      id = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    }

    return () => clearInterval(id);
  }, [isRunning, isPaused]);

  const handleStart = () => {
    setTime(0);
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    if (isRunning) {
      setIsPaused(true);
      clearInterval(intervalId);
    }
  };

  const handleResume = () => {
    if (isRunning && isPaused) {
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(0);
    clearInterval(intervalId);
  };

  return (
    <div style={styles.container}>
      <h2>Stopwatch</h2>
      <div style={styles.time}>{time} sec</div>
      <div style={styles.buttons}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleResume}>Resume</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '40px',
    fontFamily: 'Arial',
  },
  time: {
    fontSize: '48px',
    margin: '20px 0',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  }
};

export default StopWatch;
