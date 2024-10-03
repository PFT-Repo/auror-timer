import React, { useState } from 'react';
import TimerFormProps from '../models/timer-form-interface';
import styles from '../styles/TimerForm.module.css';


const TimerForm: React.FC<TimerFormProps> = ({ onSetTimer }) => {
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSetTimer(hours, minutes, seconds);
    };
  
    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Hours:
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              min="0"
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Minutes:
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))}
              min="0"
              max="59"
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Seconds:
            <input
              type="number"
              value={seconds}
              onChange={(e) => setSeconds(Number(e.target.value))}
              min="0"
              max="59"
              className={styles.input}
            />
          </label>
        </div>
        <button type="submit" className={styles.button}>Set Timer</button>
      </form>
    );
  };
  
  export default TimerForm;