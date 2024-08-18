type Icons = {
  src: string;
  alt: string;
};
const icons: Icons[] = [
  {
    src: "https://dkstatics-public.digikala.com/digikala-bellatrix/787a330f980d0cb7583d5d3316a868757535ea79_1708970899.png",
    alt: "دیجی‌کالا جت",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1708971047.png",
    alt: "دیجی‌پی",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-bellatrix/6395b5347ba5a4ba6d556f9ab3916185f2745295_1720858203.png",
    alt: "تخفیف پلاس",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1713343293.png",
    alt: "حراج دیجی استایل",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-bellatrix/afb3c938fd3149d7587b59919bfc500a461693a6_1719413014.png",
    alt: "شگفت‌های سوپرمارکتی",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-bellatrix/4bb0b7006012e541a6a4002242d1bfe863296e4f_1713545982.png",
    alt: "حراج سر ماه",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc0edf879e963e9cff31fd57b3f101743ddac8_1707297619.png",
    alt: "موبایل کارکرده",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-bellatrix/afb3c938fd3149d7587b59919bfc500a461693a6_1709571657.png",
    alt: "سوپرمارکت پرتخفیف",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-bellatrix/9d96fb92d9baa962454b1e4e7b7a6952c8f4de24_1721592404.png",
    alt: "پرجستجوترین‌ها",
  },
];
function DigiJet() {
  return (
    <div className="max-w-[1336px] w-screen flex h-[100px] flex-row mx-auto justify-start items-start text-center lg:items-start flex-wrap lg:justify-around mt-5 text-[12px] overflow-hidden">
      {icons.map((icon) => (
        <div className="flex flex-col justify-center items-center h-[104px] w-[82px]">
          <img
            src={icon.src}
            alt={icon.alt}
            className=" h-[52px] w-[52px] rounded-xl"
          />
          <p className="mt-3 h-[48px] w-[85px]">{icon.alt}</p>
        </div>
      ))}
      <div className="flex flex-col justify-center items-center h-[104px] w-[82px]">
        <div className="bg-neutral-100 h-[52px] w-[52px] rounded-full flex justify-center items-center">
          <img
            src="/asset/main/dot.svg"
            alt="بیشتر"
            className=" h-[20px] w-[30px] rounded-full bg-inherit"
          />
        </div>
        <p className="mt-3 h-[48px] w-[85px]">بیشتر</p>
      </div>
    </div>
  );
}

export default DigiJet;
