import { useEffect, useState } from "react";
import Hamburger from "../../svg/Hamburger";

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  // Prev scroll value is used when user start scrolling up ward
  const [prevScrollValue, setPrevScrollValue] = useState(0);

  const checkScrolling = () => {
    // user scrolling down --> window.scrollY > prevScrollValue
    setIsScrolling(window.scrollY > prevScrollValue);
    setPrevScrollValue(window.scrollY);
  };

  useEffect(() => {
    if (window.scrollY > 100) {
      setIsScrolling(true);
      setPrevScrollValue(window.scrollY);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScrolling, { passive: true });

    () => {
      return window.removeEventListener("scroll", checkScrolling);
    };
  }, [prevScrollValue]);

  const openSidebar = () => {
    document
      .getElementById("sidebar")
      ?.classList.add("!visible", "translate-x-0");
  };

  return (
    <div
      className={`flex items-center justify-between shadow-lg h-16 px-2 w-full sticky top-0 z-[10] bg-white transition-all ${isScrolling ? "-translate-y-16" : ""
        }`}
    >
      <div
        className="flex items-center text-3xl text-gray-500 md:hidden cursor-pointer"
        onClick={() => openSidebar()}
      >
        <Hamburger />
      </div>
      <div className="flex items-center max-md:flex-1">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          className="ml-4 w-14 h-14 md:w-20 md:h-20"
          alt="google"
        />
        <a href="" className="text-lg text-slate-500  ml-2">
          Account
        </a>
        <div className="h-full ml-4 flex items-center relative max-md:hidden">
          <p className="after:content-[''] after:bg-blue-500 after:absolute after:bottom-0 after:h-0.5 after:left-2 after:right-2">
            Overview
          </p>
        </div>
      </div>
      <div className="flex gap-6">
        <button className="text-blue-500 max-md:hidden">
          Create an Account
        </button>
        <button className="bg-blue-500 py-3 px-5 rounded text-white hover:bg-blue-700 max-md:px-2 max-md:text-sm">
          Go To Google Account
        </button>
      </div>
    </div>
  );
}
