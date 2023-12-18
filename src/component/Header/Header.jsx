import { useState } from "react";
import { FaHamburger, FaXing, FaPalette } from "react-icons/fa";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import CartIcon from "./CartIcon";

const Header = ({ textColor, showCart }) => {
  let location = useLocation();

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
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <header className="">
      <div
        className={`w-full  h-[70px] fixed z-[100] text-${textColor}
    ${
      navColour
        ? "shadow-sm  bg-main-bg transition-all text-zinc-800   duration-300 ease-in  shadow-slate-100"
        : " "
    }`}
      >
        <div className="flex items-center justify-between mx-8 h-full">
          <div>
            <a href="/">
              <h1> JayKit</h1>
            </a>
          </div>

          <div className="">
            <ul className="md:flex hidden  ">
              <li className="cursor-pointer">
                <Link
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onSetActive={handleSetActive}
                 
                >
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onSetActive={handleSetActive}
                >
                  About Us
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onSetActive={handleSetActive}
                >
                  Our Services
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  activeClass="active"
                  to="menu"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onSetActive={handleSetActive}
                >
                  Menu
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  activeClass="active"
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onSetActive={handleSetActive}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-5">
            <CartIcon showCart={showCart} />
            <div className="md:hidden pl-3 cursor-pointer">
              <FaPalette className="text-2xl text-firstColor cursor-pointer" />
            </div>

            <button
              className={`buttonp hidden md:flex bg-white border-transparent  text-firstColor  ${
                navColour ? " border-altColor border-2" : ""
              }`}
            >
              <span className="hidden md:block z-10 text-12 ">
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
          <li>
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
              className={`${location.pathname === "/" ? "active " : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="/"
              className={`${location.pathname === "/" ? "active " : ""}`}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="services"
              className={`${location.pathname === "/" ? "active " : ""}`}
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              href="/menu"
              className={`${location.pathname === "/menu" ? "active " : ""}`}
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`${location.pathname === "/" ? "active " : ""}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
