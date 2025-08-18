import React, { forwardRef, useEffect, useRef, useState } from "react";
import { assets, imgUrl } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { delay, motion } from "motion/react";

const Hero = forwardRef((props, ref) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const goToSlide = (index) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      sliderRef.current.style.transform = `translateX(-${
        index * slideWidth
      }px)`;
    }
    setCurrentSlide(index);
  };

  const scrollToElement = () => {
    if (infoRef.current) {
      infoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide]);

  return (
    <section className="relative" ref={ref}>
      {/* Overlay */}
      <div className="w-full h-screen absolute bg-black opacity-30 z-10"></div>
      {/* 
      sm:	640px	Celulares grandes
      md:	768px	Tablets
      lg:	1024px	Laptops
      xl:	1280px	Pantallas grandes
      */}
      {/* Titutlo y horario */}
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute z-10 bottom-[35%] left-[10%] mr-5"
      >
        <h1
          className="text-white opacity-90 font-medium text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl  w-full
                 "
        >
          <span className="text-[#D39231]">H</span>ogar para <br />
          adultos mayores <br />
          corazón de Jesús
        </h1>
        <NavLink
          to={"/working"}
          className="bg-[#D39231] text-white w-[50%] p-3 rounded-2xl mt-3 flex flex-row gap-2 opacity-90 justify-center hover-effect hover:opacity-100"
        >
          <img src={assets.Calendar} alt="" />
          Horarios
        </NavLink>
      </motion.div>
      {/* Flecha hacia abajo */}
      {/* <div className="absolute bottom-5 z-11 w-full flex justify-center items-center animate-bounce">
        <img
          src={assets.ArrowDown}
          alt="Flecha hacia abajo"
          className="cursor-pointer hover-effect"
          onClick={scrollToElement}
        />
      </div> */}
      {/* Texto */}
      <div className="absolute bottom-2 z-11 w-full flex justify-end items-center pr-2 max-sm:hidden">
        <p className="text-white opacity-50 text-[0.8rem]">
          Asociación San Vicente de Paúl
        </p>
      </div>
      {/* Imagen de fondo */}
      <div
        className="w-full h-screen bg-cover bg-center blur-xs"
        style={{ backgroundImage: `url(${imgUrl.HeroImagen})` }}
      ></div>
    </section>
  );
});

export default Hero;
