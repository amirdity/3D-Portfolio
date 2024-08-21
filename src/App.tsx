import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Homepage";
import GoalTypeScript from "./Projects/Goal-typescript/GoalTypeScript";
import TimerTypeScript from "./Projects/Timer-typescript/TimerTypeScript";
import ChartbarExpenseTypescript from "./Projects/Chartbar-expense-typescript/ChartbarExpenseTypescript";
import Layout from "./Projects/digikala/src/layout/Layout";
import AmirFood from "./Projects/AmirFood/AmirFood";
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Homepage />} />
      <Route path="*" element={<Homepage />} />
      <Route path="/goal-typescript" element={<GoalTypeScript />} />
      <Route path="/digikala" element={<Layout />} />
      <Route path="/amir-food" element={<AmirFood />} />
      <Route path="/timer-typescript" element={<TimerTypeScript />} />
      <Route
        path="/chartbar-expense-typescript"
        element={<ChartbarExpenseTypescript />}
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
