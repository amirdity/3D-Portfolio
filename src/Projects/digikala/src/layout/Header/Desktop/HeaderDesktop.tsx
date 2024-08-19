import HeaderNavbar from "../../../components/header/HeaderNavbar";
import MegaMenu from "../../../components/header/MegaMenu";
import Search from "./Search";
import logo from "../../../../public/asset/header/digikala-logo-asli.svg";
import { Button } from "../../../../../../stories/Button";
export default function HeaderDesktop() {
  return (
    <header className="w-full flex flex-col border-b-gray-300 border-b-[1px] mx-auto">
      {/*------------------------ BANER ----------------------*/}
      <a href="/" className="fixed z-10">
        <picture>
          <img
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/772fef5d6f3d4a18675210ac383f652f97b18d4e_1723895044.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt="حراج سر ماه"
            className=" h-[60px] w-full object-cover"
          />
        </picture>
      </a>
      <div className="flex w-full mx-auto justify-between md:px-4 grow container flex-row h-[68px] max-w-[1676px]  fixed mt-[60px] z-10 bg-white">
        <div className="flex flex-row my-auto gap-x-5 ">
          <img
            src={logo}
            alt="لوگواصلی دیجی کالا"
            className="h-[30px] my-auto"
          />
          <Search />
        </div>
        <div className="flex flex-row my-auto h-[45px] gap-x-5 text-[12px] font-[700]">
          <Button
            alignContent="center"
            alignItems="center"
            backgroundColor="#ffffff"
            borderColor="#d0d0d0"
            borderRadius={10}
            borderStyle="solid"
            borderWidth={1}
            color="#0b0a0a"
            display="flex"
            height={40}
            justifyContent="center"
            label="ورود | ثبت نام"
            onClick={() => {}}
            padding="10px 15px"
            primary
            size="small"
            width={135}
            fontFamily={"IRANYekan"}
          />
          {/* <button className="border flex flex-row w-[136px] h-[40px] items-center rounded-lg justify-center gap-x-2 py-[4px] px-[8px]">
            <img src="/login-icon.svg" />{" "}
            <p className=" text-[12px] font-[700]"> ورود | ثبت نام</p>
          </button> */}
          <span className="h-[20px] w-[1px] border-gray border border-solid my-auto" />

          <a href="/" className="my-auto">
            <img src="/asset/header/cart-icon.svg" alt="سبد خرید" />
          </a>
        </div>
      </div>

      <nav className="flex flex-row justify-between md:px-4 grow container mx-auto h-[40px] max-w-[1644px] sticky mt-[130px]">
        <div className="flex flex-row h-[40px] gap-x-1">
          <MegaMenu />
          <span className="h-[20px] w-[1px] border-gray border border-solid my-auto" />
          <HeaderNavbar
            src="/asset/header/shegeftAngiz.svg"
            alt="شگفت‌انگیزها"
            link="/incredible-offers"
          >
            شگفت‌انگیزها
          </HeaderNavbar>
          <HeaderNavbar
            src="/asset/header/super-market-icon.svg"
            alt="سوپرمارکت"
            link="/fresh"
          >
            سوپرمارکت
          </HeaderNavbar>
          <HeaderNavbar
            src="/asset/header/giftCart-icon.svg"
            alt="کارت هدیه"
            link="/dk-ds-gift-card"
          >
            کارت هدیه
          </HeaderNavbar>
          <HeaderNavbar
            src="/asset/header/bestSeleres-icon.svg"
            alt="پرفروش‌ترین‌ها"
            link="/best-selling"
          >
            پرفروش‌ترین‌ها
          </HeaderNavbar>
          <HeaderNavbar
            src="/asset/header/off-icon.svg"
            alt="تخفیف‌ها و پیشنهادها"
            link="/promotion-center"
          >
            تخفیف‌ها و پیشنهادها
          </HeaderNavbar>
          <span className="h-[20px] w-[1px] border-gray border border-solid my-auto" />
          <span className="text-[12px] mt-[9px] ml-2"> سوالی دارید؟</span>
          <span className="text-[12px] mt-[9px]"> در دیجی‌کالا بفروشید!</span>
        </div>
        <div className="flex flex-row items-center gap-x-2 mb-0 jsustify-center">
          <img
            src="/asset/header/location-icon.svg"
            alt="لوکیشن"
            className="w-[20px] h-[20px]"
          />
          <span className="text-[12px]">لطفا شهر خود را انتخاب کنید</span>
        </div>
      </nav>
    </header>
  );
}
