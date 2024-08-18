import useIsMobile from "../../hooks/useIsMobile";
import HeaderDesktop from "./Desktop/HeaderDesktop";
import HeaderMobile from "./Mobile/HeaderMobile";
// import TopBaner from "./TopBaner";
function Header() {
  const Mobile: boolean = useIsMobile();
  return (
    <div className="z-10">
      {/* <TopBaner /> */}
      {Mobile && <HeaderMobile />}
      {!Mobile && <HeaderDesktop />}
    </div>
  );
}

export default Header;
