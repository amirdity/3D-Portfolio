
import { Link } from "react-router-dom";

export default function FooterMobile() {
  return (
    <div className="bottom-0 left-0 flex flex-row fixed w-full h-[60px] bg-white justify-around text-[12px] border-t-[1px] border-gray-300 z-10">
      <Link
        to="/"
        className="flex flex-col justify-center align-middle items-center"
      >
        <img src="/asset/footer/mobile/home.svg" alt="hose" width={24} />
        <span>خانه</span>
      </Link>
      <Link
        to="/"
        className="flex flex-col justify-center align-middle items-center "
      >
        <img
          src="/asset/footer/mobile/dastebandi.svg"
          alt="dastebandi"
          width={24}
        />
        <span>دسته بندی</span>
      </Link>
      <Link
        to="/"
        className="flex flex-col justify-center align-middle items-center"
      >
        <img src="/asset/footer/mobile/cart.svg" alt="cart" width={24} />
        <span>سبد خرید</span>
      </Link>
      <Link
        to="/"
        className="flex flex-col justify-center align-middle items-center"
      >
        <img
          src="/asset/footer/mobile/myDigikala.svg"
          alt="myDigikala"
          width={24}
        />
        <span>دیجی‌کالای من</span>
      </Link>
    </div>
  );
}
