import { useState } from "react";
import HouseSelector from "./components/house-selector";
import TimerForm from "./components/time-form";
import Timer from "./components/timer";
import styles from './styles/App.module.css';
import "./App.css"

const App: React.FC = () => {
  const [selectedHouse, setSelectedHouse] = useState<string | null>(null);
  const [timerParams, setTimerParams] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);

  const handleSetTimer = (hours: number, minutes: number, seconds: number) => {
    setTimerParams({ hours, minutes, seconds });
  };

  const handleCancelTimer = () => {
    setTimerParams(null);
  };

  const houseClass = selectedHouse ? styles[selectedHouse] : '';

  return (
    <div className={`${styles.container} ${houseClass}`}>
      <HouseSelector onSelectHouse={setSelectedHouse} />
      {selectedHouse && (
        <div className={styles.houseSelected}>
          <h2>Has seleccionado {selectedHouse}</h2>
          {!timerParams ? (
            <TimerForm onSetTimer={handleSetTimer} />
          ) : (
            <Timer
              hours={timerParams.hours}
              minutes={timerParams.minutes}
              seconds={timerParams.seconds}
              onCancel={handleCancelTimer}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;