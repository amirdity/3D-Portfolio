import { Button } from "@mui/material";
import { useCartSelector } from "../hook/hook";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/store/slice/cartSlice";
import { useEffect, useState } from "react";
interface Props {
  onClose: () => void;
}

export default function Basket(props: Props) {
  const cartItems = useCartSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState<string>("0");
  useEffect(() => {
    totalPriceHandler();
  });
  function totalPriceHandler() {
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].price * cartItems[i].quantity;
    }
    setTotalPrice((totalPrice * 1000).toLocaleString("fa-IR"));
  }
  function incress(id: number) {
    dispatch(addToCart({ id }));
  }
  function decress(id: number) {
    dispatch(removeFromCart({ id }));
  }
  return (
    <dialog
      open
      className="w-full flex flex-row justify-center bg-transparent relative"
    >
      <div className="mt-[150px] bg-yellow-700 rounded-3xl flex flex-col z-50 p-10 absolute ">
        <Button variant="contained" color="warning" onClick={props.onClose}>
          <span className="digikalaFontFamily text-[17px] font-bold">بستن</span>
        </Button>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-row w-full h-[150px] justify-between items-center gap-5"
            dir="rtl"
          >
            <img
              src={item.image}
              alt={item.title}
              width={150}
              height={150}
              className="object-fill rounded-2xl"
            />
            <p>{item.title}</p>
            <Button
              variant="contained"
              color="success"
              sx={{ width: 2 }}
              onClick={() => incress(item.id)}
            >
              <AddOutlinedIcon />
            </Button>
            <span>{item.quantity}</span>
            <Button
              variant="contained"
              color="error"
              sx={{ width: 2 }}
              onClick={() => decress(item.id)}
            >
              <RemoveOutlinedIcon />
            </Button>
          </div>
        ))}
        {cartItems.length ? (
          <div className="flex flex-row justify-around w-full" dir="rtl">
            <p> مجموع خرید شما : </p>
            <p className="font-bold text-[20px]"> {totalPrice} تومان</p>
          </div>
        ) : (
          <p>سبد شما خالیست </p>
        )}
      </div>
    </dialog>
  );
}
