import { useState } from "react";
import { styles } from "../styles.ts";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/index.ts";
const Navbar = () => {
  // tailwind responsive will work after for example after sm do this
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-5 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
            setActive("");
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            {" "}
            Amir &nbsp; Fattahi &nbsp;
            <span className="sm:block hidden">
              &nbsp; | &nbsp; react &nbsp; && &nbsp; next
            </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={` ${
                active === link.title ? "text-white" : "text-secondary"
              } text-white hover:text-headingColor duration-300`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex sm:flex justify-end flex-col items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={` ${
                    active === link.title ? "text-white" : "text-secondary"
                  } text-white hover:text-headingColor duration-300 font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
