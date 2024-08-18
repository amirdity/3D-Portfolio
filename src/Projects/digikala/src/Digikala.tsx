import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout.tsx";
import Homepage from "./components/main/Homepage.tsx";
import "./style/index.css"
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage/>} />
    </Route>
  )
);
function Digikala() {
  return <RouterProvider router={route} />;
}

export default Digikala;
