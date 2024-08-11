import About from "./components/About";
import Banner from "./components/Banner";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar";
import Work from "./components/Work";
import WorkTwo from "./components/WorkTwo";
function Homepage() {
  return (
    <div className="bg-site bg-cover bg-no-repeat h-full  overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      <WorkTwo />
    </div>
  );
}

export default Homepage;
