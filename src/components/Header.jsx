import React, { useState } from "react";
import {
  IoSearchOutline,
  IoCartOutline,
  IoMenu,
  IoCloseSharp,
} from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header className="px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between mt-8 gap-6 relative">
          <div className="max-w-2xl flex items-center justify-between flex-1">
            <div className="text-2xl font-bold tracking-wide">Exclusive</div>
            {/* Desktop View */}
            <nav className="hidden md:block">
              <ul className="flex md:gap-4 lg:gap-12 text-base">
                <li className="whitespace-nowrap">
                  <a href="#">Home</a>
                </li>
                <li className="whitespace-nowrap">
                  <a href="#">Contact</a>
                </li>
                <li className="whitespace-nowrap">
                  <a href="#">About</a>
                </li>
                <li className="whitespace-nowrap">
                  <a href="/register">Sign Up</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Mobile view */}
          <div className="block md:hidden text-3xl">
            {openMenu ? (
              <IoCloseSharp onClick={() => setOpenMenu(false)} />
            ) : (
              <IoMenu onClick={() => setOpenMenu(true)} />
            )}
          </div>
          <nav
            className={`md:hidden absolute top-full z-10 w-screen -mx-4  scale-y-0 origin-top transition-all duration-75 bg-white ${
              openMenu ? "scale-y-100" : ""
            }`}
          >
            <ul className="text-center space-y-1">
              <li className="whitespace-nowrap p-2 bg-secondary">
                <a href="#">Home</a>
              </li>
              <li className="whitespace-nowrap p-2">
                <a href="#">Contact</a>
              </li>
              <li className="whitespace-nowrap p-2">
                <a href="#">About</a>
              </li>
              <li className="whitespace-nowrap p-2">
                <a href="register">Sign Up</a>
              </li>
            </ul>
            <hr />
          </nav>
          {/* Desktop view */}
          <div className="md:flex md:gap-2 lg:gap-6 items-center hidden">
            <div className="bg-secondary relative text-black text-xs rounded-md">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent w-60 focus:outline-none p-2 pl-4 pr-10"
              />
              <IoSearchOutline className="absolute right-2 top-1/2 -translate-y-1/2 text-xl" />
            </div>
            <div className="text-xl flex items-center md:gap-2 lg:gap-4">
              <IoIosHeartEmpty />
              <IoCartOutline />
            </div>
          </div>
        </div>
        {/* Mobile View */}
        <div className="flex gap-2 sm:gap-6 items-center md:hidden">
          <div className="bg-secondary relative text-black text-xs rounded-md flex-1">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent min-w-56 w-full focus:outline-none p-2 pl-4 pr-10"
            />
            <IoSearchOutline className="absolute right-2 top-1/2 -translate-y-1/2 text-xl" />
          </div>
          <div className="text-xl flex items-center gap-2 sm:gap-4">
            <IoIosHeartEmpty />
            <IoCartOutline />
          </div>
        </div>
      </header>
      <hr className="border-t mt-3" />
    </>
  );
};

export default Header;
