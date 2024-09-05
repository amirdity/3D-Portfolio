import {
  // createBrowserRouter,
  // createRoutesFromElements,
  HashRouter,
  Route,
  Routes,
  // RouterProvider,
} from "react-router-dom";
import Homepage from "./Homepage";
import GoalTypeScript from "./Projects/Goal-typescript/GoalTypeScript";
import TimerTypeScript from "./Projects/Timer-typescript/TimerTypeScript";
import ChartbarExpenseTypescript from "./Projects/Chartbar-expense-typescript/ChartbarExpenseTypescript";
import Layout from "./Projects/digikala/src/layout/Layout";
import AmirFood from "./Projects/AmirFood/AmirFood";
import AdminPanel from "./Projects/Admin-panel/AdminPanel";
import AdminDashbord from "./Projects/Admin-dashbord/AdminDashbord";
import OverviewPage from "./Projects/Admin-dashbord/page/OverviewPage";
import ProductsPage from "./Projects/Admin-dashbord/page/ProductsPage";
import UsersPage from "./Projects/Admin-dashbord/page/UsersPage";
import SalesPage from "./Projects/Admin-dashbord/page/SalesPage";
import OrdersPage from "./Projects/Admin-dashbord/page/OrdersPage";
import AnalyticsPage from "./Projects/Admin-dashbord/page/AnalyticsPage";
import SettingsPage from "./Projects/Admin-dashbord/page/SettingsPage";
// const route = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/">
//         <Route index element={<Homepage />} />
//         <Route path="*" element={<Homepage />} />
//         <Route path="/goal-typescript" element={<GoalTypeScript />} />
//         <Route path="/digikala" element={<Layout />} />
//         <Route path="*/digikala" element={<Layout />} />
//         <Route path="/digikala/*" element={<Layout />} />
//         <Route path="/amir-food" element={<AmirFood />} />
//         <Route path="/timer-typescript" element={<TimerTypeScript />} />
//         <Route
//           path="/chartbar-expense-typescript"
//           element={<ChartbarExpenseTypescript />}
//         />
//         <Route path="/admin" element={<AdminPanel />} />
//         <Route path="/adminDashbord" element={<AdminDashbord />}>
//           <Route index element={<OverviewPage />} />
//           <Route path="products" element={<ProductsPage />} />
//           <Route path="users" element={<UsersPage />} />
//           <Route path="sales" element={<SalesPage />} />
//           <Route path="orders" element={<OrdersPage />} />
//           <Route path="analytics" element={<AnalyticsPage />} />
//           <Route path="settings" element={<SettingsPage />} />
//         </Route>
//         <Route element={<Homepage />} />
//       </Route>
//       <Route path="*" element={<Homepage />} />
//     </>
//   )
// );
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="*" element={<Homepage />} />
          <Route path="/goal-typescript" element={<GoalTypeScript />} />
          <Route path="/digikala" element={<Layout />} />
          <Route path="*/digikala" element={<Layout />} />
          <Route path="/digikala/*" element={<Layout />} />
          <Route path="/amir-food" element={<AmirFood />} />
          <Route path="/timer-typescript" element={<TimerTypeScript />} />
          <Route
            path="/chartbar-expense-typescript"
            element={<ChartbarExpenseTypescript />}
          />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/adminDashbord" element={<AdminDashbord />}>
            <Route index element={<OverviewPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="sales" element={<SalesPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          {/* <Route element={<Homepage />} /> */}
        </Route>
        {/* <Route path="*" element={<Homepage />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
