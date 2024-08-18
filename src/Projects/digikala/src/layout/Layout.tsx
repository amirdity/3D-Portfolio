import Footer from "./Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
