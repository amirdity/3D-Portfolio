import hamburger from "./asset/hamburger.webp";
export type FoodArray = {
  image: string;
  star: number;
  title: string;
  description: string;
  id: number;
  price:number
};
const FoodArray: FoodArray[] = [
  {
    image: hamburger,
    star: 4.5,
    title: "یه همبرگر   چرب",
    description:
      "با سس و نوشابه و یب یسبسی بیبسیبسیبسب  بسیبس یبیسبس  یبسبسبسب  سبسبسبس بسبس یب سیبس  بسبس  یبیس",
    id: Math.random(),
    price: 399,
  },
  {
    image: hamburger,
    star: 4.5,
    title: "یه همبرگر   چرب",
    description:
      "با سس و نوشابه و یب یسبسی بیبسیبسیبسب  بسیبس یبیسبس  یبسبسبسب  سبسبسبس بسبس یب سیبس  بسبس  یبیس",
    id: Math.random(),
    price: 399,
  },
];
export default FoodArray;
