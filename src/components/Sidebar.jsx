import React from "react";
import { assets, menuLinks } from "../assets/assets";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white text-black transition-transform duration-300 z-50 shadow ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-20 flex flex-row justify-start items-center px-5">
        <button className="text-white text-2xl" onClick={toggleSidebar}>
          <img
            src={assets.Close}
            alt=""
            className="w-8 h-8 cursor-pointer hover:-translate-y-[1px] active:translate-y-[0.5px] transition-transform duration-300"
          />
        </button>
      </div>
      <ul className="flex flex-col w-full justify-center items-center gap-6 text-[#4E4E4E] text-[0.9rem]">
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
        <img
          src={assets.FacebookIcon}
          alt=""
          className="w-7 h-7 hover-effect"
        />
        <img
          src={assets.WhatsAppIcon}
          alt=""
          className="w-7 h-7 hover-effect"
        />
      </div>
    </div>
  );
};

export default Sidebar;
