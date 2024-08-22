import hamburger from "./asset/hamburger.webp";
import burger from "./asset/burger.webp";
import curry from "./asset/curry.webp";
import dumplings from "./asset/dumplings.webp";
import HotdogHeader from "./asset/HotdogHeader.webp";
import macncheese from "./asset/macncheese.webp";
import pizza from "./asset/pizza.webp";
import schnitzel from "./asset/schnitzel.webp";
import tomatoSalad from "./asset/tomato-salad.webp";
import beefHotdog from "./asset/beefHotdog.webp";
import classicHotdog from "./asset/classicHotdog.webp";
import GermanHot from "./asset/GermanHot.webp";
export type FoodArray = {
  image: string;
  star: number;
  title: string;
  description: string;
  id: number;
  price: number;
};
const FoodArray: FoodArray[] = [
  
  {
    image: GermanHot,
    star: 4,
    title: "سینی هات داگ",
    description:
      "به همراه سس و نوشابه و سیب زمینی سرخ کرده مخصوص برنامه نویس های  فرانت",
    id: Math.random(),
    price: 299,
  },
  {
    image: curry,
    star: 3.5,
    title: "زرشک پلو با مرغ",
    description:
      "به همراه سس و نوشابه و سیب زمینی سرخ کرده مخصوص برنامه نویس های  فرانت",
    id: Math.random(),
    price: 199,
  },
  {
    image: tomatoSalad,
    star: 1.5,
    title: "سالاد گوجه فرنگی",
    description:
      "به همراه سس و نوشابه و سیب زمینی سرخ کرده مخصوص برنامه نویس های  فرانت",
    id: Math.random(),
    price: 99,
  },
  {
    image: burger,
    star: 4.5,
    title: "همبرگر مخصوص تیم برنامه نویسی",
    description:
      "به همراه سس و نوشابه و سیب زمینی سرخ کرده مخصوص برنامه نویس های  فرانت",
    id: Math.random(),
    price: 599,
  },
  {
    image: dumplings,
    star: 4,
    title: "هات داگ ساده",
    description:
      "به همراه سس و نوشابه و سیب زمینی سرخ کرده مخصوص برنامه نویس های  فرانت",
    id: Math.random(),
    price: 199,
  },
  {
    image: HotdogHeader,
    star: 2.5,
    title: "هات داگ آمریکایی اصل",
    description:
      "به همراه سس و نوشابه و سیب زمینی سرخ کرده مخصوص برنامه نویس های  فرانت",
    id: Math.random(),
    price: 99,
  },
  {
    image: macncheese,
    star: 2.5,
    title: "اسپاگتی",
    description:
      "به همراه سس و نوشابه و سیب زمینی سرخ کرده مخصوص برنامه نویس های  فرانت",
    id: Math.random(),
    price: 199,
  },
  {
    image: pizza,
    star: 4.5,
    title: "پیتزا بزرگ مخصوص react  ",
    description:
      "به همراه سس و نوشابه و سیب زمینی سرخ کرده مخصوص برنامه نویس های  فرانت",
    id: Math.random(),
    price: 299,
  },
  {
    image: schnitzel,
    star: 4.5,
    title: "شنسل مرغ",
    description:
      "به همراه سس و نوشابه و سیب زمینی سرخ کرده مخصوص برنامه نویس های  فرانت",
    id: Math.random(),
    price: 99,
  },
  {
    image: beefHotdog,
    star: 4.5,
    title: "سالاد گوجه فرنگی",
    description:
      "به همراه سس و نوشابه و سیب زمینی سرخ کرده مخصوص برنامه نویس های  فرانت",
    id: Math.random(),
    price: 99,
  },
  {
    image: classicHotdog,
    star: 3,
    title: "هات داگ پر سس",
    description:
      "به همراه سس و نوشابه و سیب زمینی سرخ کرده مخصوص برنامه نویس های  فرانت",
    id: Math.random(),
    price: 150,
  },
  {
    image: hamburger,
    star: 5,
    title: "همبرگر رژیم شکن",
    description:
      "به همراه سس و نوشابه و سیب زمینی سرخ کرده مخصوص برنامه نویس های  فرانت",
    id: Math.random(),
    price: 299,
  },
];
export default FoodArray;
