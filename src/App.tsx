import { useEffect, useState } from "react";
import Start from "./components/Start";
import Pause from "./components/Pause";
import Flag from "./components/Flag";
import Reset from "./components/Reset";
import ListFlag from "./components/ListFlag";

function App() {
  const [timerStarted, setTimerStarted] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [flagCondition, setFlagCondition] = useState(false);
  const [immutableSeconds, setImmutableSeconds] = useState<number>();

  useEffect(() => {
    if (timerStarted) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 0.01);
      }, 10);
      setIntervalId(interval);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }
  }, [timerStarted]);

  const handleFlagClick = () => {
    setImmutableSeconds(seconds);
    setFlagCondition(true);
  };

  const handleResetTimer = () => {
    setSeconds(0);
    setFlagCondition(false);
  };

  return (
    <div>
      <h2
        style={{ marginBottom: "100px", marginLeft: "50px", marginTop: "50px" }}
      >
        Timer
      </h2>
      <div style={{ textAlign: "center" }}>{seconds.toFixed(2)}</div>

      {!timerStarted && <Start onClick={() => setTimerStarted(true)}></Start>}
      {!timerStarted && <Reset onClick={handleResetTimer}></Reset>}
      {timerStarted && <Pause onClick={() => setTimerStarted(false)}></Pause>}
      {timerStarted && <Flag onClick={handleFlagClick}></Flag>}

      {flagCondition && immutableSeconds && (
        <ListFlag immutableSeconds={immutableSeconds}></ListFlag>
      )}
    </div>
  );
}

export default App;
