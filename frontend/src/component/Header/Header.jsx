import { useState } from "react";
import { FaHamburger, FaXing } from "react-icons/fa";
import CartIcon from "./CartIcon";

const Header = () => {
  const [navColour, updateNavbar] = useState(false);

  const [nav, setNav] = useState(false);

  // MenuToggle
  const toggleMenu = () => setNav(!nav);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };
  window.addEventListener("scroll", scrollHandler);

  return (
    <header className="">
      <div
        className={`w-full  h-[70px] fixed z-[100] 
    ${
      navColour
        ? "shadow-sm  bg-main-bg transition-all text-zinc-800   duration-300 ease-in  shadow-slate-100"
        : " "
    }`}
      >
        <div className="flex items-center justify-between mx-8 h-full">
          <div>
            <a href="/">
              <h1> TastyPal</h1>
            </a>
          </div>

          <div className="">
            <ul className="md:flex hidden  ">
              <li className="cursor-pointer">
                <a href="https://jay-restuarant.netlify.app"> Our Homepage</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-5">
            <CartIcon />

            <button
              className={`buttonp hidden md:flex bg-white border-transparent  text-firstColor  ${
                navColour ? " border-altColor border-2" : ""
              }`}
            >
              <span className="hidden md:block z-10 text-xs ">
                <a href="/reservation">Make Reservation </a>
              </span>
            </button>
            <div
              className="md:hidden pl-3 cursor-pointer transition-all "
              onClick={toggleMenu}
            >
              {!nav ? (
                <FaHamburger className="text-xl transition-all ease-in duration-[1000ms] dark:text-white" />
              ) : (
                <FaXing className="w-6 dark:text-white" />
              )}
            </div>
          </div>
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute w-[50%] t-0 h-screen bg-zinc-100 dark:text-white dark:bg-dark-back right-0 px-8 z-[10] py-10"
          }
        >
          <li className="mb-4 border-b pb-2 border-zinc-400 hover:pl-2 hover:border-b-teal-600 transition-all ease-in-out duration-300">
            <a href="https://jay-restuarant.netlify.app">Our Homepage</a>
          </li>
         
          <li>
             <button
            className={`buttonp md:flex bg-white border-transparent  text-firstColor  ${
              navColour ? " border-altColor border-2" : ""
            }`}
          >
            <span className=" md:block z-10 text-xs ">
              <a href="/reservation">Make Reservation </a>
            </span>
          </button>
          </li>
         
        </ul>
      </div>
    </header>
  );
};

export default Header;
