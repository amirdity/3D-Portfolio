import { useState } from "react";
import Search from "./Search";

export default function HeaderMobile() {
  const [showMobileSearch, setShowMobileSearch] = useState<boolean>(false);
  function showAnimation() {
    setShowMobileSearch(!showMobileSearch);
  }
  const hide = "hideMobileSearchAnimation absolute top-0 left-0 w-full h-full z-20";
  const show = "absolute top-0 left-0 w-full h-full mobileSearchAnimation z-20 ";
  return (
    <div className="top-0 left-0 w-full bg-[#fff] h-[65px] mb-10">
      {/*------------------------ BANER ----------------------*/}
      <a href="/" className="fixed z-10">
        <picture>
          <img
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a49db6b5c73111a3da8d506fb27fa9cbbd9f0cea_1723297766.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt="حراج سر ماه"
            className=" h-[60px] w-full object-cover"
          />
        </picture>
      </a>
      <header
        className="px-4 lg:py-2 py-3 flex items-center z-5 bg-base shadow-none border-solid border-b-[1px] border-0 border-base  w-screen fixed mt-[60px] z-10"
        onClick={showAnimation}
      >
        <div className="w-full bg-[#f0f0f1] rounded-full flex justify-start gap-1 pr-5 py-2 items-center align-middle">
          <img
            src="/asset/header/searchIcon.svg"
            alt="جستجو"
            width={20}
            height={20}
            className="bg-transparent"
          />
          <span className="text-mobile-search bg-transparent text-[#81858b] opacity-70 pb-1">
            جستجو در
          </span>
          <img
            src="/asset/header/digikalaSearch.svg"
            alt="جستجو"
            width={61}
            className="bg-transparent"
          />
        </div>
      </header>

      <div className={showMobileSearch ? show : hide}>
        <Search close={showAnimation} />
      </div>
    </div>
  );
}
