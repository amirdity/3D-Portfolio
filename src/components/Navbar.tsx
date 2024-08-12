
// this is for icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 ">
      <div className="container mx-auto">
        {/**inner nav we have some icons */}
        <div className="w-full  bg-black/5 h-[80px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto px-5 flex text-2xl text-white/50  justify-around items-center">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center  "
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center  "
          >
            <BiUser />
          </Link>

          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center  "
          >
            <BsBriefcase />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
