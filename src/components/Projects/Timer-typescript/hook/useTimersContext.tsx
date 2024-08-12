import { useContext } from "react";
import { TimersContext } from "../store/timers-context";

export default function useTimersContext() {
  const ctx = useContext(TimersContext);
  if (ctx === null) {
    throw new Error("nulllllllll");
  }
  return ctx;
}
