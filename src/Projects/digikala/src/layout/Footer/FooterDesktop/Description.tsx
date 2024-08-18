import React, { useState } from "react";
import enamad from "../../../../public/asset/footer/desktop/enamad.png"
import kasbokar from "../../../../public/asset/footer/desktop/kasbokar.webp";
import rezi from "../../../../public/asset/footer/desktop/rezi.webp";
function Description() {
  const showMore: React.ReactNode = <p> مشاهده بیشتر &gt; </p>;
  const showLess: React.ReactNode = <p> بستن &gt; </p>;
  const [more, setMore] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("h-[140px]");
  const [buttonText, setButtonText] = useState<React.ReactNode>(showMore);
  function showHandler(): void {
    setMore(!more);
    if (more) {
      setHeight("h-auto");
      setButtonText(showLess);
    } else {
      setHeight("h-[140px]");
      setButtonText(showMore);
    }
  }

  return (
    <div className="flex flex-row justify-between items-start my-10 mx-5">
      {/* DESCRIPTION SECTION */}
      <div>
        <div
          className={`relative lg:ml-10 ml-0 text-neutral-500  overflow-hidden h-[125px] ${height} max-w-[1154px] leading-8 font-[400] big-text-description`}
        >
          <h1 className="font-bold text-[21px] leading-8 my-5">
            فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
          </h1>

          <p>
            یک<strong> خرید</strong> اینترنتی مطمئن، نیازمند فروشگاهی است که
            بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی
            کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛
            ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار
            کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            <br />
            یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی
            دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد.
            دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده کالا،‌ مقصد
            کالا و همچنین نوع کالا در اختیار کاربران خود قرار می‌دهد. هر
            یک&nbsp;از{" "}
            <a href="https://www.digikala.com/landing/delivery/">
              روش های ارسال دیجی کالا
            </a>{" "}
            شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای کاربران
            جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات
            دیجی‌کالا، این فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی
            از شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده
            است که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز، دریافت
            حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی، ارسال کالاهای
            بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با پست
          </p>

          <p>کدام محصولات در دیجی‌کالا قابل سفارش هستند؟</p>

          <p>
            تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود
            در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و
            تمامی شبانه روز&nbsp;دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند،
            سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود،
            درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های
            پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی
            آن‌ها می‌پردازیم که&nbsp;امکان{" "}
            <a href="https://www.digikala.com/landing/sameday-delivery/">
              <strong>ارسال امروز</strong>
            </a>{" "}
            برای آن ها وجود دارد.&nbsp;
          </p>

          <p>کالای دیجیتال</p>

          <p>
            انواع گوشی موبایل از برندهای مختلفی مثل آیفون، &nbsp;
            <a
              href="https://www.digikala.com/search/category-mobile-phone/samsung/"
              target="_blank"
            >
              گوشی سامسونگ
            </a>
            ،&nbsp;
            <a
              href="https://www.digikala.com/search/category-mobile-phone/nokia/"
              target="_blank"
            >
              گوشی نوکیا
            </a>
            ،&nbsp;
            <a
              href="https://www.digikala.com/search/category-mobile-phone/xiaomi/"
              target="_blank"
            >
              گوشی شیائومی
            </a>
            ،&nbsp;
            <a
              href="https://www.digikala.com/search/category-mobile-phone/huawei/"
              target="_blank"
            >
              گوشی هواوی
            </a>
            ، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار
            مثل&nbsp;
            <a
              href="https://www.digikala.com/search/category-tablet/samsung/"
              target="_blank"
            >
              تبلت سامسونگ
            </a>
            &nbsp;نوت 10، انواع هندزفری مثل&nbsp;
            <a
              href="https://www.digikala.com/search/category-headphone/"
              target="_blank"
            >
              هندزفری بی سیم
            </a>
            ،&nbsp;
            <a
              href="https://www.digikala.com/search/category-tv2/"
              target="_blank"
            >
              تلوزیون
            </a>
            &nbsp;از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع
            مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل&nbsp;
            <a
              href="https://www.digikala.com/search/category-3g-4g-and-5g-modem-Router/mtn-irancell/"
              target="_blank"
            >
              مودم ایرانسل
            </a>
            ،&nbsp;
            <a
              href="https://www.digikala.com/search/category-lighting-antenna/"
              target="_blank"
            >
              آنتن
            </a>
            &nbsp;و ... تنها بخشی از محصولاتی هستند که زیر مجموعه کالای دیجیتال
            در دیجی‌کالا قرار دارند.
          </p>

          <p>خودرو، ابزار و تجهیزات صنعتی</p>

          <p>
            انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا و...،
            موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی خودرو مثل
            سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه کلاج و... و
            لوازم مصرفی خودرو مثل&nbsp;
            <a
              href="https://www.digikala.com/search/category-car-coating/sana-3d/"
              target="_blank"
            >
              کفپوش سانا
            </a>
            &nbsp;در این گروه قرار می‌گیرند.
          </p>

          <p>مد و پوشاک</p>

          <p>
            محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس راحتی،
            لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال و روسری
            و... جزو مواردی هستند که می‌توانید آن‌ها را از برندهای مطرح ایرانی و
            خارجی موجود در دیجی کالا مثل آدیداس، نایکی، دبنهامز، آلدو، درسا و...
            خریداری کنید.
          </p>

          <p>اسباب بازی کودک و نوزاد</p>

          <p>
            در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و حمام کودک و
            نوزاد، انواع پوشاک و کفش،&nbsp;
            <a
              href="https://www.digikala.com/search/category-tablet/"
              target="_blank"
            >
              تبلت
            </a>
            ،&nbsp;
            <a
              href="https://www.digikala.com/search/category-toys/"
              target="_blank"
            >
              اسباب‌بازی
            </a>
            ، لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا خوری و ...
            قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری سریع و آسان تبدیل
            کند.
          </p>

          <p>کالاهای سوپر مارکتی</p>

          <p>
            هر چیزی از مواد خوراکی که به آن نیاز دارید، در&nbsp;
            <a
              href="https://www.digikala.com/main/food-beverage/"
              target="_blank"
            >
              سوپرمارکت
            </a>
            &nbsp;دیجی‌کالا پیدا می‌شود، محصولات پرطرفداری مثل&nbsp;
            <a
              href="https://www.digikala.com/search/category-peanut-butter/"
              target="_blank"
            >
              کره بادام‌زمینی
            </a>
            ،&nbsp;
            <a
              href="https://www.digikala.com/search/category-honey/"
              target="_blank"
            >
              عسل
            </a>
            ،&nbsp;
            <a
              href="https://www.digikala.com/search/category-sauce-dressing/"
              target="_blank"
            >
              سس
            </a>
            ،&nbsp;
            <a
              href="https://www.digikala.com/search/category-coffee/"
              target="_blank"
            >
              قهوه
            </a>
            ،&nbsp;
            <a
              href="https://www.digikala.com/search/category-saffron/"
              target="_blank"
            >
              زعفران
            </a>
            ، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل&nbsp;
            <a href="https://www.digikala.com/brand/nestle/" target="_blank">
              نستله
            </a>
            ، نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما هستند و تا
            رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند.
          </p>

          <p>زیبایی و سلامت</p>

          <p>
            انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت و...
            همگی در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل انواع
            شامپو، کرم،&nbsp;
            <a
              href="https://www.digikala.com/search/category-face-masque/"
              target="_blank"
            >
              ماسک صورت
            </a>
            ، ضد تعریق،&nbsp;
            <a
              href="https://www.digikala.com/search/category-hair-mask/"
              target="_blank"
            >
              ماسک مو
            </a>
            &nbsp; و...، انواع لوازم شخصی برقی، ست هدیه، بهترین انواع عطر و
            اسپری، انواع زیورآلات طلا و نقره مثل&nbsp;
            <a
              href="https://www.digikala.com/search/category-women-gold-jewelry-sets/"
              target="_blank"
            >
              سرویس طلا
            </a>
            ، سرویس نقره و... به همراه وسایل مراقبت شخصی طبی در گروه زیبایی و
            سلامت دیجی‌کالا قرار می‌گیرد. در این بخش برندهای مطرحی مثل اسنس،
            پنبه ریز، سینره و... حضور دارند.
          </p>

          <p>خانه و آشپزخانه</p>

          <p>
            یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش لوازم خانه و آشپزخانه است
            که از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا انواع&nbsp;
            <a
              href="https://www.digikala.com/search/category-household-furniture/"
              target="_blank"
            >
              مبل راحتی
            </a>
            ، انواع آبگرمکن مثل&nbsp;
            <a
              href="https://www.digikala.com/search/category-water-heater/butane/"
              target="_blank"
            >
              آبگرمکن بوتان
            </a>
            ، لباسشویی‌های متنوع مثل انواع&nbsp;
            <a
              href="https://www.digikala.com/search/category-washing-machines/snowa/"
              target="_blank"
            >
              لباسشویی اسنوا
            </a>
            ، شیرآلات مختلف مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم برقی
            آشپزخانه مثل توستر و... را شامل می‌شود و امکان خریدی عالی را برای
            مشتریان فراهم کرده است. در بخش لوازم خانگی دیجی‌کالا، برندهای معتبری
            مثل تفال، اخوان، فیلیپس، ال جی، اسنوا، جی پلاس و... حضور دارند.
          </p>

          <p>کتاب، لوازم تحریر و هنر</p>

          <p>
            بخش هنر، کتاب، رمان و لوازم تحریر دیجی‌کالا نیز یکی از متنوع‌ترین
            بخش‌های این فروشگاه اینترنتی است. انواع کتاب و مجله،{" "}
            <a href="https://www.digikala.com/landing/language-learning-books/">
              کتاب زبان
            </a>
            ، بازی، لوازم تحریر با طرح‌های مختلف مانند{" "}
            <a href="https://www.digikala.com/tags/miraculous/">
              دختر کفشدوزکی
            </a>
            ، سازهایی مثل&nbsp;
            <a
              href="https://www.digikala.com/search/category-pianos/"
              target="_blank"
            >
              پیانو
            </a>
            ،&nbsp;
            <a
              href="https://www.digikala.com/search/category-dulcimer/"
              target="_blank"
            >
              سنتور
            </a>
            ،&nbsp;
            <a
              href="https://www.digikala.com/search/category-percussion/"
              target="_blank"
            >
              هنگ درام
            </a>
            &nbsp; و... با بهترین قیمت‌ها و از بهترین برندها در دسترس شما قرار
            دارند.
          </p>

          <p>ورزش و سفر</p>

          <p>
            هر نوع وسیله و لباس ورزشی که فکرش را کنید، انواع وسایل کمپینگ و
            کوهنوردی، ساک و قمقمه ورزشی و... در این بخش قرار می‌گیرند. همچنین
            شما می‌توانید وسایل مد نظر خود را بر اساس نوع ورزش (آبی، هوازی،
            بدنسازی و...) در دسته‌بندی‌های دیجی‌کالا پیدا کنید.
          </p>

          <p>محصولات بومی و محلی</p>

          <p>
            و در آخر دیجی‌کالا از طریق به فروش رساندن محصولات بومی و سنتی
            متفاوتی مثل انواع خوراکی، گلیم و گبه، ابزار و ... تلاش کرده تا بین
            هنر ایرانی و متقاضیان آن کوتاه‌ترین راه را پیدا کند. در این بخش شما
            می‌توانید انواع محصولات از جمله ظروف زیبای مخصوص به&nbsp;سفره
            هفت‌سین&nbsp; و پذیرایی از مهمانان در روزهای&nbsp;نوروز، انواع آیینه
            و شمعدان و هر آن چیزی را که برای خلق زیبایی در روزهای بهاری به آن
            نیاز دارید، با قیمت مناسب و تنوع بسیار بالا انتخاب کنید. همچنین در
            صفحه{" "}
            <strong>
              <a href="https://www.digikala.com/tags/">برچسب ها</a>
            </strong>
            ، امکان مشاهده و خرید انواع محصولات با طرح های بومی وجود
            دارد.&nbsp;&nbsp;دیجی‌کالا همچنین برای اینکه حال و هوای عید را به
            اعضای خود هدیه کند،&nbsp;تقویم ۱۴۰۱، انواع ایده&nbsp;عکس پروفایل عید
            نوروز،&nbsp;آهنگ‌های عید نوروز&nbsp;و موزیک‌های شاد بهاری، وسایل
            مربوط به&nbsp;خانه‌تکانی&nbsp;و&nbsp;انواع لباس های عید&nbsp; را
            برای شما فراهم کرده است تا بتوانید در کنار خرید خود، از این حال و
            هوای تازه نهایت لذت را ببرید.
          </p>

          <p>&nbsp;</p>
        </div>
        <button
          className="text-blue-700 pointer-events-auto font-[400] text-[15px]"
          onClick={showHandler}
        >
          {buttonText}
        </button>
      </div>
      {/* NAMAD SECTION */}
      <div className="max-w-[450px] flex flex-row justify-between gap-x-5">
        <div className="border-solid border border-gray-300 h-[110px] w-[110px] justify-center items-center flex rounded-lg">
          <img src={rezi} alt="راضی" className="h-[75px] w-[75px]" />
        </div>
        <div className="border-solid border border-gray-300 rounded-lg h-[110px] w-[110px] justify-center items-center flex">
          <img
            src={kasbokar}
            alt="کسب و کار"
            className="h-[75px] w-[75px] "
          />
        </div>
        <div className="border-solid border border-gray-300 h-[110px] w-[110px] justify-center items-center flex rounded-lg">
          <img
            src={enamad}
            alt="اینماد"
            className="h-[75px] w-[75px] p-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Description;
