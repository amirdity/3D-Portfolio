import { Button } from "@mui/material";
import { useCartSelector } from "../hook/hook";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/store/slice/cartSlice";
interface Props {
  onClose: () => void;
}

export default function Basket(props: Props) {
  const cartItems = useCartSelector((state) => state.cart.items);
  const dispatch = useDispatch()
  function incress(id:number){
    dispatch(addToCart({id}))
  }
  function decress(id: number) {
    dispatch(addToCart({ id }));
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
            <Button variant="contained" color="error" sx={{ width: 2 }}>
              <RemoveOutlinedIcon />
            </Button>
          </div>
        ))}
      </div>
    </dialog>
  );
}
