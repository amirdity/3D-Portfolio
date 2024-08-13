import { useEffect, useRef, useState } from "react";
import { type Timer } from "../store/timers-context.tsx";
import Container from "./UI/Container.tsx";
import useTimersContext from "../hook/useTimersContext.tsx";
// type TimerProps = Timer;

/**
 * Timer component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the timer.
 * @param {number} props.duration - The duration of the timer in seconds.
 * @returns {JSX.Element} - The Timer component.
 */
export default function Timer({
  name,
  duration,
}: {
  name: string;
  duration: number;
}): JSX.Element {
  const interval = useRef<NodeJS.Timeout | null>(null);
  const [remainingTime, setRemainingTime] = useState<number>(duration * 1000);

  const { isRunning } = useTimersContext();

  // Clear interval when time is up
  useEffect(() => {
    if (remainingTime <= 0 && interval.current) {
      clearInterval(interval.current);
    }
  }, [remainingTime]);

  // Update remaining time every 50ms when timer is running
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 50);
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
