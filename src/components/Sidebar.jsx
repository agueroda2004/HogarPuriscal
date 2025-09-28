import React from "react";
import { assets, menuLinks } from "../assets/assets.jsx";
import { NavLink, useLocation } from "react-router-dom";
import Redes from "./Redes";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white text-black transition-transform duration-300 z-50 shadow ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-20 flex flex-row justify-start items-center px-5">
        <button
          className="text-amber-500 text-2xl w-[20px] h-[20px] cursor-pointer"
          onClick={toggleSidebar}
        >
          <svg
            viewBox="-0.5 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M3 21.32L21 3.32001"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 3.32001L21 21.32"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <ul className="flex flex-col w-full justify-center items-center gap-6 text-[#4E4E4E] text-[0.8rem]">
        {menuLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            onClick={toggleSidebar}
            className="inline-block border-b-1 border-transparent hover:border-gray-400 transition-all duration-300"
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
      <div className="w-full h-20 flex flex-row justify-center items-center gap-3">
        <Redes />
      </div>
    </div>
  );
};

export default Sidebar;
