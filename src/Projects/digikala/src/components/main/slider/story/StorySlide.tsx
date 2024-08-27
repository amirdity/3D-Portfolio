import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import classes from "./StorySlide.module.css"
import styled from "styled-components";
type Slide = {
  src: string;
  alt: string;
};
const slide: Array<Slide> = [
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/e88495d57a9021171b27464393d27fc778957df7_1720952448.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "دوربین کدوم بهتره؟ Note 13 Pro Vs Galaxy A55",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/a6b64d37d9bc8ec41b1800756462669bc92d7123_1721324067.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "اسپرینگ رول سبزیجات",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/1b61bd14e786d9ceabc93d65327081510542d417_1721333364.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "میانرده آنر در برابر سامسونگ📱",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/a36a43305f083ea5339b7d6382852a3ff8fa8fd2_1721329371.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "با این کمپ رویایی بزن",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/35c091eb742976d5aa5ca1d1e3333e1e88ca4387_1721286963.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "مداد رنگی ولی آبرنگی🖌️",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/107295c7099dabfdbe930953fd406d8b1a83ab5d_1721311314.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "خشکی پوستتو باهاش برطرف کن",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/bb53a4c5b3717a86ef3a3d056d9c8e1febf41096_1720369667.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "مکمل چی بخوریم؟",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/8185d2d6872d08ec70240c52565fac29556283fb_1721329220.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "کیبورد مکانیکی عالی برای نویسنده‌ها",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/770d9c06828a75d530004ccdcfadfe4c950a7a61_1721502590.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "شامپو خاک رس هیدرودرم",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/374aedbaf483eaae2de66b170a754cf4b3d60e94_1720208815.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "واقعا آدم کجا بودی؟",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/4e79e8f9c216040334912b1bbb5761f26e5b4558_1721031241.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "چرا بهترین کنسول بازی، ایکس باکس سری S است؟",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/618bfc27a9a86db320bbd451b64b79ad6b4625de_1721284234.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "گوشواره های متنوع و ارزان بخیه ای",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/3c0c7f19f6482482704b137542b3dd2b1dd3d6b5_1719166375.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "محافظ لنز با کیفیت",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/f1a9e6bcb8a82aa9a46f187790082eed3e0473d6_1720355427.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "بررسی تخته وایت برد مدل الفا",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/618bfc27a9a86db320bbd451b64b79ad6b4625de_1721284234.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "چسب دو‌طرفه قوی",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/bc175b9bd14881f06920df48ef9bc06f4686e80b_1720222101.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "شرلوک : 13 گروگان",
  },
  {
    src: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/35c091eb742976d5aa5ca1d1e3333e1e88ca4387_1721286963.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    alt: "مداد رنگی ولی آبرنگی🖌️",
  },
];
const Story = styled.div`
  
  & .swiper-button-next,
  .swiper-button-prev {
    color: rgb(0, 0, 0);
    border: 1px solid rgb(121, 117, 117);
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background: white;
  }

  & .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 15px;
  }

  & .swiper-button-next.swiper-button-disabled,
  .swiper-button-prev.swiper-button-disabled {
    opacity: 0;
  }


  & .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
function StorySlide() {
  return (
    <Story>
      <div className="max-w-[1336px] w-screen mt-2 flex h-[150px] pt-5 flex-row  mx-auto justify-center items-center text-center align-middle storySlide">
        <Swiper
          dir="rtl"
          slidesPerView={13}
          spaceBetween={1}
          navigation={true}
          breakpoints={{
            300: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            400: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            500: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 12,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slide.map((slide) => (
            <SwiperSlide>
              <div className="flex flex-col h-[140px] w-[84px]">
                <div
                  className={`"rounded-full items-center justify-center flex w-[80px] h-[80px] ${classes.story} mt-2"`}
                >
                  <div className="rounded-full bg-white">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="rounded-full w-[74px] h-[74px] p-1"
                    />
                  </div>
                </div>
                <p className={`"w-[84px] h-[48px] ${classes["story-text"]} "`}>
                  {slide.alt}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Story>
  );
}

export default StorySlide;
