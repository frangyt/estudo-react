import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      setIsRunning(false);
      dialog.current.open();
    }, targetTime * 1000);
    setIsRunning(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setIsRunning(false);
    setTimerExpired(false);
  }
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2> {title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isRunning ? handleStop : handleStart}>
            {isRunning ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isRunning ? "active" : undefined}>
          {isRunning ? "timer is running" : "inactive"}
        </p>
      </section>
    </>
  );
}
