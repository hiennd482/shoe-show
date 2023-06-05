import React, { useEffect, useState } from "react";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  SunIcon,
  MoonIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { set } from "lodash";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../app/CartSlice";
import useDarkmode from "./darkMode/useDarkmode";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState();

  const [isDarkMode, toggleDarkMode] = useDarkmode();
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);
  const onCarttoggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  const [navState, setNavstate] = useState(false);

  const onNavSroll = () => {
    if (window.scrollY > 30) {
      setNavstate(true);
    } else {
      setNavstate(false);
    }
  };
  useEffect(() => {
    // setName(location.state.id);
    window.addEventListener("scroll", onNavSroll);

    return () => {
      window.removeEventListener("scroll", onNavSroll);
    };
  });
  return (
    <>
      <header
        className={` ${
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center opacity-100 z-50 blur-effect-theme"
        } `}
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt=""
              className={`w-16 h-auto ${navState && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="flex items-center">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>

            {isDarkMode ? (
              <li className="flex items-center">
                <button
                  onClick={() => toggleDarkMode(!isDarkMode)}
                  className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                >
                  <SunIcon
                    className={`icon-style ${
                      navState && "text-slate-900 transition-all duration-300"
                    }`}
                  />
                </button>
              </li>
            ) : (
              <li className="flex items-center">
                <button
                  onClick={() => toggleDarkMode(!isDarkMode)}
                  className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                >
                  <MoonIcon
                    className={`icon-style ${
                      navState && "text-slate-900 transition-all duration-300"
                    }`}
                  />
                </button>
              </li>
            )}
            {/* <li className="flex items-center">
              <HeartIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li> */}
            <li className="flex items-center">
              <button
                onClick={onCarttoggle}
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navState
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>

            <li className="flex items-center">
              <UserIcon
                onClick={() => navigate("/login")}
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
              {/* {id.length > 0 ? ( */}

              {/* {name ? <p className="icon-style">{name}</p> : ""} */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
