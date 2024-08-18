import SuportLinks from "./FooterDesktop/SuportLinks";
import digiFooter from "../../../public/asset/footer/desktop/digi-footer.svg";
import arrowGoUpp from "../../../public/asset/footer/desktop/arrowGoUp.svg";
import expressDelivery from "../../../public/asset/footer/desktop/express-delivery.svg";
import cashDelivery from "../../../public/asset/footer/desktop/cash-on-delivery.svg";
import support from "../../../public/asset/footer/desktop/support.svg";
import dayReturn from "../../../public/asset/footer/desktop/days-return.svg";
import originalProducts from "../../../public/asset/footer/desktop/original-products.svg";
import FooterNavlink from "./FooterDesktop/FooterNavlink";
import DownloadLink from "./FooterDesktop/DownloadLink";
import Description from "./FooterDesktop/Description";
import Reserved from "./FooterDesktop/Reserved";

export default function FooterDesktop() {
  return (
    <div>
      <footer className="flex flex-col justify-center max-w-[1676px] mx-auto mt-10">
        {/* ----------------------HEADER OF THE FOOTER------------------------- */}
        <div className="flex flex-row justify-between items-center  max-w-[1676px] px-5">
          <img src={digiFooter} alt="دیجی کالا" className="h-[30]" />
          <button className="flex flex-row items-center border rounded-lg px-2 h-[40px] w-[140px] justify-center gap-1">
            {" "}
            <span className="text-[14px]">بازگشت به بالا</span>
            <img src={arrowGoUpp} alt="فلش رو به بالا" />
          </button>
        </div>
        {/* --------------------------SUPUTR--------------------------------------- */}
        <div className="flex flex-row justify-start items-center h-[26px] gap-x-5 mt-4">
          <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
          <span className="h-[20px] w-[1px] border-gray border border-solid my-auto" />
          <p>۰۲۱-۹۱۰۰۰۱۰۰</p>
          <span className="h-[20px] w-[1px] border-gray border border-solid my-auto" />
          <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
        <div className="flex flex-row justify-around items-center h-[100px] gap-x-5 mt-4">
          <SuportLinks
            src={expressDelivery}
            alt="اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس"
            link="/faq/question/79/"
          >
            اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس
          </SuportLinks>
          <SuportLinks
            src={cashDelivery}
            alt="امکان پرداخت در محل"
            link="/faq/question/79/"
          >
            امکان پرداخت در محل
          </SuportLinks>
          <SuportLinks
            src={support}
            alt=" روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ"
            link="/page/contact-us/"
          >
            ۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ
          </SuportLinks>
          <SuportLinks
            src={dayReturn}
            alt="هفت روز ضمانت بازگشت کالا"
            link="/faq/question/83/"
          >
            هفت روز ضمانت بازگشت کالا{" "}
          </SuportLinks>
          <SuportLinks
            src={originalProducts}
            alt="ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ"
            link="/faq/question/82/"
          >
            ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ
          </SuportLinks>
        </div>
        <div className="flex flex-col justify-center max-w-[1676px]">
          <FooterNavlink />
          <DownloadLink />
          <Description />
          <Reserved />
        </div>
      </footer>
      
    </div>
  );
}
