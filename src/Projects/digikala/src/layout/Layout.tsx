import Digikala from "../Digikala";
import Footer from "./Footer";
import Header from "./Header/Header";


function Layout() {
  return (
    <div className="bg-white digikala text-black" dir="rtl">
      
      <Header />
      <Digikala/>
      <Footer />
    </div>
  );
}

export default Layout;
