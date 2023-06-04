import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
import gg from "../assets/google.svg";
import apple from "../assets/apple.svg";
import logonike from "../assets/logonike.png";
import { footerAPI } from "../data/data.js";
import { HeartIcon, HomeIcon } from "@heroicons/react/24/outline";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  // const getAlldata = async (req, res) => {
  //   const respone = await axios.get("http://localhost:7070/getall");
  //   console.log("data ne", respone.data);
  // };
  // useEffect(() => {
  //   // const password = document.querySelector('input[type="password"]');
  //   // password.addEventListener("focus", (event) => {
  //   //   document.querySelector(".alert").classList.add("hidden");
  //   // });
  //   // password.addEventListener("blur", (event) => {
  //   //   document.querySelector(".alert").classList.remove("hidden");
  //   // });
  //   getAlldata();
  // }, []);

  const handleSumbit = (e) => {
    e.preventDefault();
    if (email.length == 0 && password.length == 0) {
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
    } else if (password !== "123") {
      setErr(true);
      const input = document.getElementById("floating-input2");
      input.focus();
    } else {
      navigate("/home", { state: { idc: email } });
    }
    console.log(email, password);
  };
  return (
    <div
      className={`antialiased h-screen relative font-inter bg-white dark:bg-black text-black text-sm font-normal overflow-x-hidden bg-[url('https://cdna.artstation.com/p/assets/images/images/036/002/188/large/m-n-vinit-img-20210322-204116-186.jpg?1616482578')] bg-no-repeat bg-[length:100vw_100vh]  `}
    >
      <nav className="flex items-center justify-between nike-container p-2 ">
        <img
          src={logonike}
          className="w-11 py-2 cursor-pointer "
          alt=""
          onClick={() => navigate("/")}
        />
        <div className="flex items-center gap-3">
          <HeartIcon
            className={`icon-style  text-slate-200 transition-all duration-300
          `}
          />
          <HomeIcon
            className="icon-style  text-slate-200 transition-all duration-300"
            onClick={() => navigate("/")}
          ></HomeIcon>
        </div>
      </nav>
      {/* <img src={bglogin} alt="" /> */}
      <div className="  flex flex-wrap items-center justify-center p-4 sm:px-12 gap-4">
        <div className="flex-1 text-center"></div>
        <div className="mr-2 absolute top-4 right-4"></div>
        <div className="max-w-[485px] flex-none w-full bg-white dark:bg-black p-4 sm:p-12  rounded-2xl ">
          <div className="flex items-center justify-center">
            <img src={logonike} className="w-9 py-2" alt="" />
          </div>
          <h1 className="text-lg font-semibold mb-2 text-center dark:text-white">
            Sign In
          </h1>
          <p className="text-center text-black/40 dark:text-white/40 mb-7 lowercase">
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-7">
            <a
              href=""
              className="flex flex-1 items-center gap-1 py-1 pl-2 pr-3 border border-black/10 hover:border-black rounded-lg transition-all duration-300"
            >
              <div className="w-8 h-8 flex-none bg-white p-2">
                <img src={gg} alt="" />
              </div>
              <p className="whitespace-nowrap">Sign in with Google</p>
            </a>
            <a
              href=""
              className="flex flex-1 items-center gap-1 py-1 pl-2 pr-3 border border-black/10 hover:border-black rounded-lg transition-all duration-300"
            >
              <div className="w-8 h-8 flex-none bg-white p-2">
                <img src={apple} alt="" className="" />
              </div>
              <p className="whitespace-nowrap">Sign in with Apple</p>
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

            {/* alert null password*/}
            {err && password.length <= 0 ? (
              <div className="flex text-[red] gap-2 alert">
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
              // <div className="flex text-[red] gap-2 alert">
              //   <div>
              //     <svg
              //       aria-hidden="true"
              //       // className="stroke-red-500"
              //       fill="currentColor"
              //       focusable="false"
              //       width="16px"
              //       height="16px"
              //       viewBox="0 0 24 24"
              //       xmlns="https://www.w3.org/2000/svg"
              //     >
              //       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
              //     </svg>
              //   </div>
              //   <div>
              //     <p className=" text-xs  ">wrong password</p>
              //   </div>
              // </div>
              ""
            )}

            <div className="mb-7 text-right">
              <a href="" className="text-[#9cadfc]">
                Forgot Password?
              </a>
            </div>
            <button
              onClick={handleSumbit}
              className="py-2 px-4 bg-black w-full text-white rounded-lg text-lg font-semibold border-black hover:bg-transparent hover:text-black border transition-all duration-300"
            >
              Sign in
            </button>
          </form>
          <p className="text-center text-black/40 dark:text-white/40">
            Not a Member yet ?
            <a href="/register" className="text-[#9cadfc]">
              Join Us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
