import { Button, Typography } from "@mui/material";
import classes from "../../../components/Header/Header.module.css";
import styles from "./style.module.css";
import QuiltedImageList from "./ShowItem.tsx";
import MediaCard from "./Cart";
import { useContext, useState } from "react";
import Basket from "./Basket.tsx";
import BackDrop from "./Backdrop.tsx";
import Submit from "./Submit.tsx";
import { AuthContext } from "../context/store.tsx";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const authCtx = useContext(AuthContext);
  function showCartHandler() {
    setShowCart(!showCart);
  }
  function showSubmitFormHandler() {
    setShowSubmitForm(!showSubmitForm);
  }
  function logoutHandler() {
    authCtx?.logoutHandler()
    setShowSubmitForm(false)
  }
  return (
    <header className="flex flex-col justify-around items-center mt-10 w-full max-w-[1000px] mx-auto">
      <div id="backdrop" />
      {showCart && (
        <>
          <BackDrop onClick={showCartHandler} />
          <Basket onClose={showCartHandler} />
        </>
      )}
      {showSubmitForm && (
        <>
          <BackDrop onClick={showSubmitFormHandler} />
          <Submit onClose={showSubmitFormHandler} />
        </>
      )}

      <div className="flex flex-row justify-around items-center mt-10 w-full max-w-[1000px] mx-auto">
        <Typography sx={{ fontWeight: 1000, fontSize: 40 }}>
          <div className={classes.glitch} data-glitch="AMIR FOOD">
            AMIR <span className="text-[#e030f0]">FOOD</span>
          </div>
        </Typography>
        <div dir="rtl" className="gap-5 flex flex-row">
          {!authCtx!.isLoggedIn && (
            <Button
              variant="contained"
              color="success"
              onClick={showSubmitFormHandler}
            >
              <span className="digikalaFontFamily text-[17px] font-[550]">
                ورود
              </span>
            </Button>
          )}
          {authCtx!.isLoggedIn && (
            <Button variant="contained" color="error" onClick={logoutHandler}>
              <span className="digikalaFontFamily text-[17px] font-bold">
                خروج
              </span>
            </Button>
          )}
          <Button variant="contained" color="warning" onClick={showCartHandler}>
            <span className="digikalaFontFamily text-[17px] font-bold">
              سبد خرید
            </span>
          </Button>
        </div>
      </div>
      <div
        className={`"mt-10 rounded-[40px] w-full p-10 mx-10 pb-10" ${styles.backdrop}`}
      >
        <QuiltedImageList />
        <MediaCard />
      </div>
    </header>
  );
}
