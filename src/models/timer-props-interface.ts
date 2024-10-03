export default interface TimerProps {
    hours: number;
    minutes: number;
    seconds: number;
    onCancel: () => void;
  }