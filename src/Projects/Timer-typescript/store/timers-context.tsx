import { createContext, ReactNode, useReducer } from "react";
export type Timer = {
  name: string;
  duration: number;
};
type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};
type TimersContextValue = TimerState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};
const initialState: TimerState = {
  isRunning: true,
  timers: [],
};
export const TimersContext = createContext<TimersContextValue | null>(null); //this object has everything
type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};
type StartTimerAction = {
  type: "START_TIMERS";
};
type StopTimerAction = {
  type: "STOP_TIMERS";
};
type Action = AddTimerAction | StartTimerAction | StopTimerAction;
type TimersContextProvider = {
  children: ReactNode;
};
function timersReducer(state: TimerState, action: Action): TimerState {
  // switch (action.type) {
  //   case "ADD_TIMER"

  // }
  if (action.type === "ADD_TIMER") {
    return {
      ...state,
      timers: [
        ...state.timers,
        { name: action.payload.name, duration: action.payload.duration },
      ],
    };
  } else if (action.type === "START_TIMERS") {
    return {
      ...state,
      isRunning: true,
    };
  } else if (action.type === "STOP_TIMERS") {
    return {
      ...state,
      isRunning: false,
    };
  }
  return state;
}
export default function TimersContextProvider({
  children,
}: TimersContextProvider) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);
  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimer() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimer() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
