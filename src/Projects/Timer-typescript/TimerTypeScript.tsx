import AddTimer from "./components/AddTimer.tsx";
import Header from "./components/Header.tsx";
import Timers from "./components/Timers.tsx";
import "./index.css";
import TimersContextProvider from "./store/timers-context.tsx";
import classes from "./gloryshadow.module.css";
function TimerTypeScript() {
  return (
    <div className="TimerTypeScript pt-10 bg-black pb-96 flex justify-center">
      <div className={`w-[700px] pt-10 ${classes.gloryshadow}`}>
        <TimersContextProvider>
          <Header />
          <main>
            <AddTimer />
            <Timers />
          </main>
        </TimersContextProvider>
      </div>
    </div>
  );
}

export default TimerTypeScript;
