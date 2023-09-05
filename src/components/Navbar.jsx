import React, { useState } from "react";
import LogoIcon from "./LogoIcon";
import { BiCaretDown, BiSolidUser } from "react-icons/bi";
import BtnPrimary from "./button/BtnPrimary";
import DarkModeToggle from "./DarkModeToggle";
import BtnSecondary from "./button/BtnSecondary";
const Navbar = () => {
  const [icon, setIcon] = useState(true);
  const toggleIcon = () => {
    setIcon(!icon);
    console.log(icon);
  };
  return (
    <div className="flex flex-col w-full ">
      <div className="navbar bg-[#333545] justify-center invisible md:visible">
        <div className="flex px-4 justify-center">
          <LogoIcon src="src/assets/bmtwhite.svg" />
        </div>
        <div className="flex gap-6 w-3/4 justify-center">
          <div className="form-control w-full">
            <div className="bg-white flex rounded-md w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mx-3 text-gray-400 self-center"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for Movies, Events, plays, Sports and Activities"
                className="input h-9 text-sm w-full focus:outline-none "
              />
            </div>
          </div>
          <div className="flex dropdown w-1/3 gap-5 items-center text-sm">
            <div className="dropdown dropdown-bottom">
              <label tabIndex={0} className="flex  gap-2 text-white">
                Pune <BiCaretDown className="self-center" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <BtnPrimary name="Sign In" />
            <BtnSecondary name="Sign Up" />
            <DarkModeToggle />
          </div>
        </div>
      </div>
      <div className="flex items-center bg-gray-500 h-16 md:invisible absolute left-0 right-0 bottom-0 w-full p-0">
        <button
          onClick={() => setIcon(true)}
          className={`flex flex-col items-center w-1/2 border-r border-gray-400 ${
            icon ? "text-col-pink" : "text-col-gray"
          }`}
        >
          <span className="w-6">
            <img src={icon ? "bmt.svg" : "bmtInactive.svg"} />
          </span>
          Home
        </button>
        <button
          onClick={() => setIcon(false)}
          className="flex flex-col items-center focus:text-col-pink w-1/2"
        >
          <span>
            <BiSolidUser size={24} />
          </span>
          Profile
        </button>
      </div>
    </div>
  );
};
export default Navbar;