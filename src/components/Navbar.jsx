import React, { useEffect, useRef, useState } from "react";
import { assets, imgUrl } from "../assets/assets.jsx";
import Sidebar from "./Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Navbar = ({
  heroRef,
  hogarRef,
  preguntasRef,
  donacionesRef,
  serviciosRefs,
}) => {
  const navRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const scrollTo = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  useEffect(() => {
    const nav = navRef.current;

    if (location.pathname !== "/") {
      setIsScrolled(true);
      return;
    }

    const hero = heroRef?.current;
    console.log(hero);
    if (!nav || !hero) return;

    const navHeight = nav.getBoundingClientRect().height;

    const stickyNav = (entries) => {
      const [entry] = entries;
      setIsScrolled(!entry.isIntersecting);
    };

    const observer = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    observer.observe(hero);

    return () => {
      if (hero) observer.unobserve(hero);
    };
  }, [heroRef, location.pathname]);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, delay: 0.3 }}
      ref={navRef}
      className={`w-full h-20  flex flex-row ${
        isScrolled ? "justify-between" : "justify-between"
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

      {!isScrolled && <div className="w-13 h-full"></div>}

      {location.pathname === "/" && (
        <div
          className={`gap-10 hidden md:flex ${
            !isScrolled ? "text-white" : "text-amber-500"
          }  box-border overflow-hidden h-full justify-center items-center font-light`}
        >
          <a
            onClick={() => scrollTo(hogarRef)}
            className={`inline-block border-b-1 ${
              isScrolled
                ? "border-transparent hover:border-amber-500/70"
                : "border-transparent hover:border-white"
            } transition-all duration-300 cursor-pointer text-sm opacity-80`}
          >
            Hogar
          </a>

          <a
            onClick={() => scrollTo(preguntasRef)}
            className={`inline-block border-b-1 ${
              isScrolled
                ? "border-transparent hover:border-amber-500/70"
                : "border-transparent hover:border-white"
            } transition-all duration-300 cursor-pointer text-sm opacity-80`}
          >
            Preguntas
          </a>
          <a
            onClick={() => scrollTo(donacionesRef)}
            className={`inline-block border-b-1 ${
              isScrolled
                ? "border-transparent hover:border-amber-500/70"
                : "border-transparent hover:border-white"
            } transition-all duration-300 cursor-pointer text-sm opacity-80`}
          >
            Donaciones
          </a>
        </div>
      )}
      {location.pathname === "/servicios" && (
        <div className="gap-10 hidden md:flex text-amber-500 box-border overflow-hidden h-full justify-center items-center font-light">
          <a
            onClick={() => scrollTo(serviciosRefs.fisioterapiaRef)}
            className="inline-block border-b-1 border-transparent hover:border-amber-500/70 cursor-pointer text-sm opacity-80"
          >
            Fisioterapia
          </a>
          <a
            onClick={() => scrollTo(serviciosRefs.enfermeriaRef)}
            className="inline-block border-b-1 border-transparent hover:border-amber-500/70 cursor-pointer text-sm opacity-80"
          >
            Enfermería
          </a>
          <a
            onClick={() => scrollTo(serviciosRefs.nutricionRef)}
            className="inline-block border-b-1 border-transparent hover:border-amber-500/70 cursor-pointer text-sm opacity-80"
          >
            Nutrición
          </a>
          <a
            onClick={() => scrollTo(serviciosRefs.gereatriaRef)}
            className="inline-block border-b-1 border-transparent hover:border-amber-500/70 cursor-pointer text-sm opacity-80"
          >
            Geriatría
          </a>
        </div>
      )}

      <button
        className=" cursor-pointer hover:-translate-y-[1px] active:translate-y-[0.5px] transition-transform duration-300"
        onClick={toggleSidebar}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-10 h-10 ${
            isScrolled ? "text-amber-500" : "text-white"
          }`}
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default Navbar;
