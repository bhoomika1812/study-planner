import { useState, useEffect } from "react";

function Pomodoro() {
  const [time, setTime] = useState(1500);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0) {
      setRunning(false);
      alert("🎉 Pomodoro Session Completed!");
    }

    return () => clearInterval(interval);
  }, [running, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const resetTimer = () => {
    setTime(1500);
    setRunning(false);
  };

  const shortBreak = () => {
    setTime(300);
    setRunning(false);
  };

  const longBreak = () => {
    setTime(900);
    setRunning(false);
  };

  return (
    <div className="pomodoro">
      <h2>⏱ Pomodoro Timer</h2>

      <h1>
        {minutes}:{seconds < 10 ? "0" : ""}
        {seconds}
      </h1>

      <div className="timer-buttons">
        <button onClick={() => setRunning(true)}>
          ▶ Start
        </button>

        <button onClick={() => setRunning(false)}>
          ⏸ Pause
        </button>

        <button onClick={resetTimer}>
          🔄 Reset
        </button>
      </div>

      <div className="timer-buttons">
        <button onClick={shortBreak}>
          ☕ 5 Min Break
        </button>

        <button onClick={longBreak}>
          🌴 15 Min Break
        </button>
      </div>
    </div>
  );
}

export default Pomodoro;