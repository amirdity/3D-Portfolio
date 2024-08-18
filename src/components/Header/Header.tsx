// import classes from "../../style/Glich.module.css"

import logo from "../../assets/logo-header.svg";
import classes from "./Header.module.css"
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="/">
            <img
              src={logo}
              alt="amir fatthi"
              className="w-[50vw] sm:w-auto md:w-auto xl:w-auto 2xl:w-auto  "
            />
          </a>
          {/** button */}
          <button
            className={`${classes.btn} h-[48px] px-6 text-xl cursor-none rounded-3xl`}
          >
            <div className={classes.glitch} data-glitch="My Portfolio">

            My Portfolio
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
