import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gg from "../assets/google.svg";
import apple from "../assets/apple.svg";
import bgcover from "../assets/coverlogin.webp";
import logonike from "../assets/logonike.png";
import { Footer, Navbar } from "../components";
import { footerAPI } from "../data/data.js";
import { HeartIcon, HomeIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // const password = document.querySelector('input[type="password"]');
    // password.addEventListener("focus", (event) => {
    //   document.querySelector(".alert").classList.add("hidden");
    // });
    // password.addEventListener("blur", (event) => {
    //   document.querySelector(".alert").classList.remove("hidden");
    // });
  });

  const handleSumbit = (e) => {
    const dataCheckregister = { username, email, password };

    e.preventDefault();
    if (username.length == 0 && email.length == 0 && password.length == 0) {
      setErr(true);
      const input = document.getElementById("floating-input1");
      input.focus();
    } else if (email.length == 0) {
      setErr(true);
      const input = document.getElementById("floating-input1");
      input.focus();
    } else if (password.length == 0) {
      setErr(true);
      const input = document.getElementById("floating-input2");
      input.focus();
    } else if (username.length == 0) {
      setErr(true);
      const input = document.getElementById("floating-input3");
      input.focus();
    } else if (
      username.length !== "" &&
      email.length !== "" &&
      password.length !== ""
    ) {
      // setErr(true);
      axios
        .post("https://shoe-show-be.onrender.com/register", dataCheckregister)
        .then((res) => {
          const btn = document.getElementById("btnSubmit");
          btn.classList.add("disabled");
          toast.success("register success");
          // const arr = [];
          // arr.push(res.data.Array);

          // const username = JSON.stringify(arr.map((i) => i.username));

          setTimeout(() => {
            navigate("/login");
          }, 1000);
        })
        .catch((err) => {
          toast.error("register error");
        });
      // input.focus();
    } else {
      console.log("case cuoi cung", email, password);
    }
    console.log(email, password);
  };
  return (
    <div
      className={`antialiased relative font-inter bg-white dark:bg-black text-black text-sm font-normal overflow-x-hidden  `}
    >
      <nav className="flex items-center justify-between nike-container p-2">
        <img
          src={logonike}
          className="w-11 py-2 cursor-pointer "
          alt=""
          onClick={() => navigate("/")}
        />
        <div className="flex items-center gap-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search..."
            className="border border-black/10 px-3 rounded-md py-1 bg-[#f5f5f5]"
          />
          <HeartIcon
            className={`icon-style  text-slate-900 transition-all duration-300
          `}
          />
          <HomeIcon
            className="icon-style  text-slate-900 transition-all duration-300"
            onClick={() => navigate("/")}
          ></HomeIcon>
        </div>
      </nav>
      {/* <Navbar></Navbar> */}
      {/* <img src={bglogin} alt="" /> */}
      <div className="min-h-screen flex flex-wrap items-center justify-center p-4 sm:px-12 gap-4">
        <div className="mr-2 absolute top-4 right-4"></div>
        <div className="dark:bg-white/5 max-w-[485px] flex-none w-full bg-white  p-4 sm:p-12  rounded-2xl ">
          <div className="  flex items-center justify-center">
            <img src={logonike} className="w-9 py-2 " alt="" />
          </div>
          <h1 className="text-2xl font-semibold mb-2 text-center dark:text-white">
            BECOME A NIKE MEMBER
          </h1>
          <p className="text-center text-black/40 dark:text-white/40 mb-7">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration and community.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-7">
            <a
              href=""
              className=" dark:hover:border-white dark:border dark:border-white/20 flex flex-1 items-center gap-1 py-1 pl-2 pr-3 border border-black/10 hover:border-black rounded-lg transition-all duration-300"
            >
              <div className="w-8 h-8 flex-none bg-white p-2 dark:bg-black ">
                <img src={gg} alt="" />
              </div>
              <p className="whitespace-nowrap dark:text-white">
                Sign in with Google
              </p>
            </a>
            <a
              href=""
              className=" dark:hover:border-white dark:border dark:border-white/20 flex flex-1 items-center gap-1 py-1 pl-2 pr-3 border border-black/10 hover:border-black rounded-lg transition-all duration-300"
            >
              <div className="w-8 h-8 flex-none bg-white p-2 dark:rounded-full">
                <img src={apple} alt="" className="" />
              </div>
              <p className="whitespace-nowrap dark:text-white">
                Sign in with Apple
              </p>
            </a>
          </div>
          <div className="flex items-center mb-7 ">
            <div className="w-full h-[2px] bg-black/10 dark:bg-white/10"></div>
            <div className="text-black/40 dark:text-white/40 px-5 whitespace-nowrap">
              Or with Email
            </div>
            <div className="w-full h-[2px] bg-black/10 dark:bg-white/10"></div>
          </div>
          <form action="" className="mb-4">
            {/* input */}
            {err && username.length <= 0 ? (
              <div className="flex text-[red] gap-2  py-2">
                <div>
                  <svg
                    aria-hidden="true"
                    // className="stroke-red-500"
                    fill="currentColor"
                    focusable="false"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                  </svg>
                </div>
                <div>
                  <p className=" text-xs  ">Enter an username</p>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="mb-4 relative ">
              <input
                type="text"
                id="floating-input3"
                className={`${
                  err && username.length <= 0
                    ? " border-red-400 focus:border-red-700  "
                    : ""
                } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-black/10 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label
                for="floating-input3"
                className={`${
                  err && username.length <= 0 ? "peer-focus:text-red-500" : ""
                }  absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75  top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4  left-1`}
              >
                Username
              </label>
            </div>

            {err && email.length <= 0 ? (
              <div className="flex text-[red] gap-2 alert py-2">
                <div>
                  <svg
                    aria-hidden="true"
                    // className="stroke-red-500"
                    fill="currentColor"
                    focusable="false"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                  </svg>
                </div>
                <div>
                  <p className=" text-xs  ">Enter a email</p>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="mb-4 relative ">
              <input
                type="text"
                id="floating-input1"
                className={`${
                  err && email.length <= 0
                    ? " border-red-400 focus:border-red-700  "
                    : ""
                } block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-black/10 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                for="floating-input1"
                className={`${
                  err && email.length <= 0 ? "peer-focus:text-red-500" : ""
                }  absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75  top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4  left-1`}
              >
                Email
              </label>
            </div>

            {err && password.length <= 0 ? (
              <div className="flex text-[red] gap-2 alert py-2">
                <div>
                  <svg
                    aria-hidden="true"
                    // className="stroke-red-500"
                    fill="currentColor"
                    focusable="false"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                  </svg>
                </div>
                <div>
                  <p className=" text-xs  ">Enter a password</p>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="mb-2 relative">
              <input
                type="password"
                id="floating-input2"
                className={`${
                  err && password.length <= 0
                    ? " border-red-400 focus:border-red-700  "
                    : ""
                }  block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-black/10 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                for="floating-input2"
                className={`${
                  err && password.length <= 0 ? "peer-focus:text-red-500" : ""
                } absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75  top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4  left-1`}
              >
                Password
              </label>
            </div>

            {/* <div className="mb-2 relative">
              <input
                type="password"
                id="floating-input4"
                className={`${
                  err && password.length <= 0
                    ? " border-red-400 focus:border-red-700  "
                    : ""
                }  block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-black/10 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <label
                for="floating-input4"
                className={`${
                  err && password.length <= 0 ? "peer-focus:text-red-500" : ""
                } absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75  top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4  left-1`}
              >
                Repeat Password
              </label>
            </div> */}

            <div className="mb-7 text-right">
              <a href="" className="text-[#9cadfc]">
                Forgot Password?
              </a>
            </div>
            <button
              onClick={handleSumbit}
              id="btnSubmit"
              className=" dark:bg-purple-200 dark:text-black dark:hover:bg-black dark:hover:border-white dark:hover:text-white  py-2 px-4 bg-black w-full text-white rounded-lg text-lg font-semibold border-black hover:bg-transparent hover:text-black border transition-all duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-black/40 dark:text-white/40">
            Already hava an Account?
            <span
              onClick={() => navigate("/login")}
              className="text-[#9cadfc] cursor-pointer"
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
      {/* <Footer footerAPI={footerAPI}></Footer> */}
    </div>
  );
};

export default Login;
