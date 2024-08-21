import { Typography } from "@mui/material";
import HotdogHeader from "../asset/HotdogHeader.webp";
import classes from "../../../components/Header/Header.module.css"
import styles from "./style.module.css"
import QuiltedImageList from "./ShowItem.tsx";
export default function Header() {
  return (
    <header className="flex flex-col justify-around items-center mt-10 w-full max-w-[1000px] mx-auto">
      <div className="flex flex-row justify-around items-center mt-10 w-full max-w-[1000px] mx-auto">
        <Typography sx={{ fontWeight: 1000, fontSize: 40 }}>
          <div className={classes.glitch} data-glitch="AMIR FOOD">
            AMIR <span className="text-[#e030f0]">FOOD</span>
          </div>
        </Typography>
        <img
          src={HotdogHeader}
          alt="هات داگ"
          width={200}
          className="rounded-full"
        />
      </div>
      <div
        className={`"mt-10 rounded-[40px] w-full h-[1000px] p-10 mx-10" ${styles.backdrop}`}
      >
        <QuiltedImageList/>
      </div>
    </header>
  );
}
