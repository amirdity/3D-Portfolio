import { lazy } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar";
// import WorkThree from "./components/WordThree";
// import Work from "./components/Work";
// import WorkTwo from "./components/WorkTwo";
const Work = lazy(() => import("./components/Work"));
const WorkTwo = lazy(() => import("./components/WorkTwo"));
const WorkThree = lazy(() => import("./components/WorkTwo"));
function Homepage() {
  return (
    <div className="bg-site bg-cover bg-no-repeat h-full  overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      <WorkTwo />
      <WorkThree/>
    </div>
  );
}

export default Homepage;
