import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import burger from "../asset/burger.jpg"
import curry from "../asset/curry.jpg";
import dumplings from "../asset/dumplings.jpg";
import HotdogHeader from "../asset/HotdogHeader.webp";
import macncheese from "../asset/macncheese.jpg";
import pizza from "../asset/pizza.jpg";
import schnitzel from "../asset/schnitzel.jpg";
import tomatoSalad from "../asset/tomato-salad.jpg";
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      // sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: burger,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: curry,
    title: "Burger",
  },
  {
    img: dumplings,
    title: "Camera",
  },
  {
    img: HotdogHeader,
    title: "Coffee",
    cols: 2,
  },
  {
    img: macncheese,
    title: "Hats",
    cols: 2,
  },
  {
    img: pizza,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: schnitzel,
    title: "Basketball",
  },
  {
    img: tomatoSalad,
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];
