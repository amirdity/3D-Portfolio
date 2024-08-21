import { Helmet } from "react-helmet";
import Digikala from "../Digikala";
import Footer from "./Footer";
import Header from "./Header/Header";

function Layout() {
  return (
    <div className="bg-white digikala text-black" dir="rtl">
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/favicon.webp"/>
       
        <meta name="description" content="هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! جدیدترین انواع گوشی موبایل، لپ تاپ، لباس، لوازم آرایشی و بهداشتی، کتاب، لوازم خانگی، خودرو و... با امکان تعویض و مرجوعی آسان | ✓ارسال رايگان ✓پرداخت در محل ✓ضمانت بازگشت کالا - برای خرید کلیک کنید!"/>

        <title>فروشگاه اینترنتی دیجی‌کالا</title>
      </Helmet>
      <Header />
      <Digikala />
      <Footer />
    </div>
  );
}

export default Layout;
