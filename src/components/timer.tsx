import React from 'react';
import { useTimer } from 'react-timer-hook';
import TimerProps from '../models/timer-props-interface';
import styles from '../styles/Timer.module.css';

const Timer: React.FC<TimerProps> = ({ hours, minutes, seconds, onCancel }) => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setHours(expiryTimestamp.getHours() + hours);
    expiryTimestamp.setMinutes(expiryTimestamp.getMinutes() + minutes);
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + seconds);
  
    const {
      seconds: timerSeconds,
      minutes: timerMinutes,
      hours: timerHours,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
    return (
      <div className={styles.timer}>
        <div className={styles.timeDisplay}>
          <span>{String(timerHours).padStart(2, '0')}</span>:
          <span>{String(timerMinutes).padStart(2, '0')}</span>:
          <span>{String(timerSeconds).padStart(2, '0')}</span>
        </div>
        <p>{isRunning ? 'Running' : 'Not running'}</p>
        <button onClick={start} className={styles.button}>Start</button>
        <button onClick={pause} className={styles.button}>Pause</button>
        <button onClick={resume} className={styles.button}>Resume</button>
        <button
          onClick={() => {
            const time = new Date();
            time.setHours(time.getHours() + hours);
            time.setMinutes(time.getMinutes() + minutes);
            time.setSeconds(time.getSeconds() + seconds);
            restart(time);
          }}
          className={styles.button}
        >
          Restart
        </button>
        <button onClick={onCancel} className={styles.button}>Cancel</button>
      </div>
    );
  };
  
  export default Timer;