import React, { useEffect, useState } from "react";
import { assets, imgUrl } from "../assets/assets";
import Sidebar from "./Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
      return;
    } else {
      setIsScrolled(false);
    }
    setIsScrolled((prev) => (location.pathname !== "/" ? true : prev));
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);
  return (
    <div
      className={`w-full h-20  flex flex-row ${
        isScrolled ? "justify-between" : "justify-end"
      } items-center px-5 shadow fixed z-20 bg-transparent ${
        isScrolled ? "bg-white" : "bg-transparent"
      } transition-all duration-200`}
    >
      {/* Side bar */}
      {sidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-transparent z-40"
          onClick={toggleSidebar}
        />
      )}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Navbar */}
      {isScrolled && (
        <img
          src={imgUrl.Logo}
          alt=""
          className="w-13 cursor-pointer"
          onClick={() => navigate("/")}
        />
      )}

      <button
        className=" cursor-pointer hover:-translate-y-[1px] active:translate-y-[0.5px] transition-transform duration-300"
        onClick={toggleSidebar}
      >
        <img
          src={assets.Menu}
          alt=""
          className="w-10 h-10"
          onClick={toggleSidebar}
        />
      </button>
    </div>
  );
};

export default Navbar;
