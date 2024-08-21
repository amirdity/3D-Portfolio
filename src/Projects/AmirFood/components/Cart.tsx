import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import hamburger from "../asset/hamburger.webp";
import { Rating } from "@mui/material";
export default function MediaCard() {
  return (
    <div className="flex justify-around w-full gap-5 mt-5">
      {foodArray.map((food) => (
        <Card sx={{ }} key={food.id}>
          <CardMedia
            sx={{ height: 180 }}
            image={food.image}
            title="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              dir="rtl"
              sx={{ fontWeight: 500 }}
            >
              <span className="digikalaFontFamily">{food.title}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary" dir="rtl">
              <span className="digikalaFontFamily">{food.description}</span>
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Rating
              name="simple-controlled"
              defaultValue={food.star}
              precision={0.5}
              // value={value}
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
            />
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
const foodArray = [
  {
    image: hamburger,
    star: 4.5,
    title: "یه همبرگر   چرب",
    description:
      "با سس و نوشابه و یب یسبسی بیبسیبسیبسب  بسیبس یبیسبس  یبسبسبسب  سبسبسبس بسبس یب سیبس  بسبس  یبیس",
    id: Math.random(),
  },
  {
    image: hamburger,
    star: 4.5,
    title: "یه همبرگر   چرب",
    description:
      "با سس و نوشابه و یب یسبسی بیبسیبسیبسب  بسیبس یبیسبس  یبسبسبسب  سبسبسبس بسبس یب سیبس  بسبس  یبیس",
    id: Math.random(),
  },
  {
    image: hamburger,
    star: 4.5,
    title: "یه همبرگر   چرب",
    description:
      "با سس و نوشابه و یب یسبسی بیبسیبسیبسب  بسیبس یبیسبس  یبسبسبسب  سبسبسبس بسبس یب سیبس  بسبس  یبیس",
    id: Math.random(),
  },
];
