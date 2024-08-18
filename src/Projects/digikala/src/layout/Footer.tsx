import useIsMobile from "../hooks/useIsMobile";
import FooterDesktop from "./Footer/FooterDesktop";
import FooterMobile from "./Footer/FooterMobile";

function Footer() {
  const Mobile: boolean = useIsMobile();
  return (
    <div className="z-100">
      {Mobile && <FooterMobile />}
      {!Mobile && <FooterDesktop />}
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
