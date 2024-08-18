import bazar from "../../../../public/asset/footer/desktop/download/bazar.svg";
import mayket from "../../../../public/asset/footer/desktop/download/mayket.svg";
import sib from "../../../../public/asset/footer/desktop/download/sib.svg";
import dot from "../../../../public/asset/footer/desktop/download/dot.svg";
import logo from "../../../../public/asset/footer/desktop/download/footerlogo2.webp";
function DownloadLink() {
  return (
    <div className="bg-[#3c4b6d] flex flex-row rounded-lg h-[70px] justify-between items-center px-10 m-5">
      <div className=" bg-inherit  flex flex-row text-white justify-center  items-center font-[500] text-[21px] gap-x-5 mx-5">
        <img src={logo} alt="" className="w-[40px] rounded-lg" />
        دانلود اپلیکیشن دیجی‌کالا
      </div>
      <div className="flex flex-row gap-5 bg-inherit rounded-lg">
        <img src={bazar} alt="دانلود از بازار" className=" rounded-lg" />
        <img src={mayket} alt="دانلود از مایکت" className=" rounded-lg" />
        <img src={sib} alt="دانلود از سیب" className=" rounded-lg" />
        <div className="bg-white rounded-lg h-[44px] w-[44px] items-center justify-center flex ml-4">
          <img
            src={dot}
            alt="باقی موارد"
            className=" rounded-lg h-[44px] w-[44px]"
          />
        </div>
      </div>
    </div>
  );
}

export default DownloadLink;
