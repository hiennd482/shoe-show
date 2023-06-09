import React from "react";
import { useDispatch } from "react-redux";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart } from "../../app/CartSlice";

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const dispatch = useDispatch();
  const onAddtoCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(setAddItemToCart(item));
  };
  const onCarttoggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  return (
    <div
      className={` relative bg-gradient-to-b ${color} ${shadow} grid items-center  rounded-xl py-4 px-5 transition-all duration-70 ease-in-out w-full hover:scale-105  ${
        ifExists ? "justify-items-start" : "justify-items-center"
      }`}
    >
      <div
        className={`grid items-center   ${
          ifExists ? "justify-items-start" : "justify-items-center"
        }`}
      >
        <h1 className="text-slate-200 dark:text-slate-900 text-lx lg:text-lg md:text-base font-medium filter drop-shadow">
          {title}
        </h1>
        <p className="text-slate-200  dark:text-slate-900 filter drop-shadow md:text-sm font-normal text-base">
          {text}
        </p>
        <div className="flex items-center justify-between w-28 my-2">
          <div className="flex items-center bg-white/80  dark:bg-black/80 px-1 rounded blur-effect-theme ">
            <h1 className="text-black dark:text-white text-sm font-medium ">
              ${price}
            </h1>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="icon-style w-4 h-5 md:w-4 md:h-4 text-slate-900 dark:text-slate-200"></StarIcon>
            <h1 className="text-sm font-normal text-slate-100 dark:text-slate-800">
              {rating}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="bg-white/90 dark:bg-black/90 blur-effect-theme  button-theme p-0.5 shadow shadow-sky-200 dark:shadow-sky-950 "
            onClick={() => onAddtoCart()}
          >
            <ShoppingBagIcon className="icon-style text-slate-900 dark:text-slate-100"></ShoppingBagIcon>
          </button>
          <button
            type="button"
            onClick={() => {
              onAddtoCart();
              onCarttoggle();
            }}
            className="bg-white/90 dark:bg-black/90 blur-effect-theme  button-theme shadow shadow-sky-200 dark:shadow-sky-950 text-black dark:text-white px-2 py-1"
          >
            {btn}
          </button>
        </div>
      </div>
      <div
        className={`flex items-center ${
          ifExists ? "absolute top-5 right-1" : "justify-center"
        }`}
      >
        <img
          src={img}
          alt=""
          className={` transitions-theme hover:-rotate-6  ${
            ifExists
              ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
              : "h-36 w-64"
          }`}
        />
      </div>
    </div>
  );
};

export default Item;
