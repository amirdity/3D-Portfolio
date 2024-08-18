import classes from "./ShgeftAngizSuper.module.css";
const offers = [
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/79614762a83c72827adb5940fee9a27309233426_1661770880.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    alt: "کالباس 60 درصد قارچ و مرغ مهيا پروتئين - 250 گرم	",
    off: 45,
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/022621b61ac3d6ae20568e23162c7f657bcdf4ee_1701119702.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "بطری آب",
    off: 44,
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/4780f5337b986feff08e9f99cece7d7d72709d86_1635850867.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "سبزی",
    off: 40,
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/bf794805a8c7fedec353a157b290fd6d92fa3848_1714539598.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "گوشت",
    off: 40,
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/71d00a76bbbe5d7fbbf61a9c74c1416b3b402ad8_1682755712.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "سوسسیس",
    off: 40,
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-products/a7a312b8e3f52d47c5fe6b182f9eb6b699e7478d_1657543754.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    alt: "کنسرو رب",
    off: 40,
  },
];
function ShgeftAngizSuper() {
  return (
    <div
      className={`h-[110px] max-w-[1920px] ${classes.shgeftAngizSuper} flex flex-row gap-10 rounded-lg justify-around w-full m-5 `}
    >
      {/* <img src="freshPattern.svg" alt="" /> */}
      <div className="flex flex-row justify-center items-center align-bottom gap-10 bg-inherit">
        <img src="supermarket/basket.webp" alt="" />
        <img src="supermarket/she-sup.svg" alt="" />
        <p className="bg-green-700 rounded-2xl text-white px-6 py-1 font-[700] text-[1.4rem]">
          {" "}
          تا 45 % تخفیف
        </p>
      </div>
      <div className="flex flex-row justify-center items-center align-middle bg-inherit ">
        {offers.map((offer) => (
          <div
            key={Math.random()}
            className="w-[74px] h-[74px] relative bg-white rounded-full"
          >
            <img
              src={offer.src}
              alt={offer.alt}
              className="w-[58px] h-[58px] rounded-full"
            />
            <span className=" absolute bg-red-600 text-white font-[500] text-[1rem] rounded-2xl px-2">
              % {offer.off.toLocaleString("ar-EG")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShgeftAngizSuper;
