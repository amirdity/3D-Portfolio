import React, { useState } from "react";
import { styles } from "../styles.ts";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/index.ts";
const Navbar = () => {
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
          <p className="text-white text-[18px] font-bold cursor-pointer">
            {" "}
            Amir Fattahi{" "}
            <span className="sm:block hidden">| react && next</span>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
