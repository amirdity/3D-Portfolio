import React from "react";
import { Link } from "react-router-dom";
type HeaderNavbar = {
  link: string;
  src: string;
  alt: string;
  children: React.ReactNode;
};
function HeaderNavbar({ link, src, alt, children }: HeaderNavbar) {
  // prees cntrl + shift + 2 to have half space
  return (
    <>
      <Link
        to={link}
        className="flex flex-row gap-x-1 justify-center items-center text-[12px] font-[400] leading-4"
      >
        <img src={src} alt={alt} className="w-[18px]" />
        {children}
      </Link>
    </>
  );
}



export default HeaderNavbar;
