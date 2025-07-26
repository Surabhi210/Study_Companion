import { useState, useEffect } from 'react';
import './PomodoroTimer.css';

function PomodoroTimer() {
  const workDuration = 25 * 60; // 25 minutes
  const breakDuration = 5 * 60; // 5 minutes

  const [secondsLeft, setSecondsLeft] = useState(workDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isRunning) {
      timer = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsBreak(!isBreak);
            setIsRunning(false);
            setSecondsLeft(isBreak ? workDuration : breakDuration);
            alert(isBreak ? 'Back to work!' : 'Time for a break!');
            return isBreak ? workDuration : breakDuration;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, isBreak]);

  const formatTime = () => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleStartPause = () => setIsRunning(prev => !prev);
  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(isBreak ? breakDuration : workDuration);
  };

  return (
    <div className="pomodoro">
      <h2>{isBreak ? 'Break Time 🍵' : 'Focus Time 🎯'}</h2>
      <div className="timer">{formatTime()}</div>
      <div className="controls">
        <button onClick={handleStartPause}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
