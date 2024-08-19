import { Link } from "react-router-dom";
import dastebandi from "../../../public/asset/footer/mobile/dastebandi.svg";
import home from "../../../public/asset/footer/mobile/home.svg";
import cart from "../../../public/asset/footer/mobile/cart.svg";
import myDigikala from "../../../public/asset/footer/mobile/myDigikala.svg";
export default function FooterMobile() {
  return (
    <div className="bottom-0 left-0 flex flex-row fixed w-full h-[60px] bg-white justify-around text-[12px] border-t-[1px] border-gray-300 z-10">
      <Link
        to="/"
        className="flex flex-col justify-center align-middle items-center"
      >
        <img src={home} alt="hose" width={24} />
        <span>خانه</span>
      </Link>
      <Link
        to="/"
        className="flex flex-col justify-center align-middle items-center "
      >
        <img src={dastebandi} alt="dastebandi" width={24} />
        <span>دسته بندی</span>
      </Link>
      <Link
        to="/"
        className="flex flex-col justify-center align-middle items-center"
      >
        <img src={cart} alt="cart" width={24} />
        <span>سبد خرید</span>
      </Link>
      <Link
        to="/"
        className="flex flex-col justify-center align-middle items-center"
      >
        <img src={myDigikala} alt="myDigikala" width={24} />
        <span>دیجی‌کالای من</span>
      </Link>
    </div>
  );
}
