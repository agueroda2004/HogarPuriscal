import React, { useEffect, useRef, useState } from "react";
import BtnVolver from "./BtnVolver";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";

const FAQSeccion = ({ seccion }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slideIntervalRef = useRef(null);
  const totalSlides = 3;

  const goToSlide = (index) => {
    if (!sliderRef.current) return;
    const slideWidth = sliderRef.current.children[0].clientWidth;
    sliderRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    slideIntervalRef.current = setInterval(nextSlide, 3000);
    const handleResize = () => {
      goToSlide(currentSlide);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(slideIntervalRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentSlide]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  console.log(location.pathname);
  return (
    <>
      <div className="h-20  w-full"></div>
      <div className="w-full flex justify-center min-h-screen py-25">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0">
          {/* Imagenes */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center md:sticky top-25"
          >
            <div className="w-full max-w-3xl overflow-hidden relative">
              <div
                className="flex transition-transform duration-500 ease-in-out object-cover"
                id="slider"
                ref={sliderRef}
              >
                {seccion.imagenes.map((img, index) => (
                  <img
                    src={img.src}
                    className="w-full flex-shrink-0"
                    alt={`Slide ${index}`}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:w-[700px]"
          >
            <p className="text-amber-500 text-sm font-medium">Hogar Puriscal</p>
            <h1 className="text-3xl font-normal text-black/70">
              {seccion.title}
            </h1>
            <p className="text-sm text-slate-500 mt-2 pb-4">
              {seccion.description}
            </p>
            {seccion.info.map((info, index) => (
              <div
                className="border-b border-slate-200 py-4 cursor-pointer"
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-normal text-black/70">
                    <span className="text-amber-500">{info.title[0]}</span>
                    {info.title.slice(1)}
                  </h3>
                  {info.description && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        openIndex === index ? "rotate-180" : ""
                      } transition-all duration-500 ease-in-out`}
                    >
                      <path
                        d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                        stroke="#1D293D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <div
                  onClick={() => toggleAccordion(index)}
                  className={`text-sm text-slate-500 transition-all duration-400 ease-in-out max-w-md overflow-hidden  ${
                    openIndex === index
                      ? "opacity-100 max-h-full translate-y-0"
                      : "opacity-0 max-h-0"
                  }`}
                  style={{
                    transitionProperty: "opacity, max-height, transform",
                  }}
                >
                  {info.description &&
                    info.description.map((paragraph, i) => (
                      <p key={i} className="mb-2">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
            ))}
            <div className="py-5 flex flex-row justify-between items-center">
              {location.pathname === "/requisitos" && (
                <a
                  href="ruta/a/tu/archivo.pdf"
                  download="nombre_del_archivo.pdf"
                  className="bg-amber-500 px-5 py-2 rounded-[5px] text-white hover-effect flex flex-row gap-3"
                >
                  Descargar requisitos
                  <div className="h-6 w-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-white"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </a>
              )}

              <BtnVolver />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FAQSeccion;
