import AddTimer from "./components/AddTimer.tsx";
import Header from "./components/Header.tsx";
import Timers from "./components/Timers.tsx";
import "./index.css";
import TimersContextProvider from "./store/timers-context.tsx";
function TimerTypeScript() {
  return (
    <div className="TimerTypeScript">
      <TimersContextProvider>
        <Header />
        <main>
          <AddTimer />
          <Timers />
        </main>
      </TimersContextProvider>
    </div>
  );
}

export default TimerTypeScript;
