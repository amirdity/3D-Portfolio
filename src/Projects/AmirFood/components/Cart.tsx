import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import CircularIntegration from "./BuyIcon";
import styled from "styled-components";
import FoodArray from "../FoodList";
import { useCartDispatch } from "../hook/hook";
import { addToCart } from "../Redux/store/slice/cartSlice";
const Style = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  gap: 20px;
  margin-top: 20px;
  justify-content: space-around;
`;
export default function MediaCard() {
  const dispatch = useCartDispatch();
  // const quantity = useCartSelector((state) => state.cart.);
  function AddToCartHandler(FoodId: number) {
    dispatch(addToCart({ id: FoodId }));
  }
  // const quanity = useSelector((state)=>state.)
  return (
    <Style>
      {FoodArray.map((food) => (
        <Card key={food.id}>
          <CardMedia
            sx={{ height: 180 }}
            image={food.image}
            title={food.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              dir="rtl"
              sx={{ fontWeight: 500, height:50 }}
            >
              <span className="digikalaFontFamily">{food.title}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary" dir="rtl">
              <span className="digikalaFontFamily">{food.description}</span>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              dir="rtl"
              sx={{ fontWeight: 500 }}
            >
              <span className="digikalaFontFamily">{(food.price * 1000).toLocaleString("fa-IR")} تومان </span>
            </Typography>
          </CardContent>
          <CardActions>
            <div onClick={() => AddToCartHandler(food.id)}>
              <CircularIntegration />
            </div>
            {/* <p className="mx-5">{}</p> */}
            <Rating
              name="simple-controlled"
              defaultValue={food.star}
              precision={0.5}
            />
          </CardActions>
        </Card>
      ))}
    </Style>
  );
}
