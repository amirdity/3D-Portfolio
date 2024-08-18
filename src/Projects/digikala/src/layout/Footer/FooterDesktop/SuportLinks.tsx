import { ReactNode } from "react";
import { Link } from "react-router-dom";
type SupotrLinks = {
  link: string;
  src: string;
  alt: string;
  children: ReactNode;
};
function SuportLinks({ link, src, alt, children }: SupotrLinks) {
  return (
    <Link to={link} className="flex flex-col justify-center items-center text-center">
      <img src={src} alt={alt} className="h-[56px] w-[56px]"/>
      {children}
    </Link>
  );
}

export default SuportLinks;
