import useTimersContext from "../hook/useTimersContext";
import Button from "./UI/Button";

export default function Header() {
  const timerCtx = useTimersContext()
  return (
    <header>
      <h1>CONTEXT TIMER</h1>
      <Button onClick={timerCtx.isRunning ? timerCtx.stopTimer : timerCtx.startTimer}>{timerCtx.isRunning? "Stop": "Resume" } Timer</Button>
    </header>
  );
}
