import React, { useEffect, useRef, useState } from "react";
import { imgUrl, quienesSomos } from "../assets/assets";

const QuienesSomos = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

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

  return (
    <>
      <div className="w-full  flex justify-center items-center min-h-screen pt-30 p-5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0">
          {/* Imagenes */}
          <div className="flex items-center md:sticky top-25">
            <div className="w-full max-w-3xl overflow-hidden relative">
              <div
                className="flex transition-transform duration-500 ease-in-out object-cover"
                id="slider"
                ref={sliderRef}
              >
                <img
                  src={imgUrl.TrabajoComunal}
                  className="w-full flex-shrink-0"
                  alt="Slide 1"
                />
                <img
                  src={imgUrl.Voluntariado}
                  className="w-full flex-shrink-0"
                  alt="Slide 2"
                />
                <img
                  src={imgUrl.QuienesSomos}
                  className="w-full flex-shrink-0"
                  alt="Slide 3"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-amber-600 text-sm font-medium">Hogar Puriscal</p>
            <h1 className="text-3xl font-semibold text-black/70">
              ¿Quienes somos?
            </h1>
            <p className="text-sm text-slate-500 mt-2 pb-4">
              Estas es informacion interesantes sobre nosotros como institucion.
            </p>
            {quienesSomos.map((obj, index) => (
              <div
                className="border-b border-slate-200 py-4 cursor-pointer"
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-medium text-black/70">
                    <span className="text-amber-600">{obj.title[0]}</span>
                    {obj.title.slice(1)}
                  </h3>
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
                </div>
                <div
                  onClick={() => toggleAccordion(index)}
                  className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md overflow-hidden  ${
                    openIndex === index
                      ? "opacity-100 max-h-[1000px] translate-y-0"
                      : "opacity-0 max-h-0"
                  }`}
                  style={{
                    transitionProperty: "opacity, max-height, transform",
                  }}
                >
                  {obj.description.map((paragraph, i) => (
                    <p key={i} className="mb-2">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
  // const [openIndex, setOpenIndex] = React.useState(null);
  // return (
  //   <>
  //     <div className="min-h-screen flex flex-col justify-center items-center pt-[120px]">
  //       <div className="shadow-lg rounded-2xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] overflow-hidden mx-auto">
  //         {/* Título */}
  //         <div className="w-full h-[130px] overflow-hidden relative ">
  //           <div className="w-full h-full bg-black opacity-55 absolute z-0"></div>
  //           <img
  //             src={imgUrl.QuienesSomos}
  //             alt=""
  //             className="w-full h-full object-cover object-center absolute blur-[2px] z-[-1]"
  //           />
  //           <h1 className="text-3xl sm:text-4xl md:text-5xl text-white opacity-95 absolute w-full text-center h-full my-10 z-10 font-semibold">
  //             <span className="text-[#D39231] opacity-100">Q</span>uienes somos
  //           </h1>
  //         </div>
  //         {/* Información */}
  //         <div className="flex flex-col w-full items-center mt-5 mb-10">
  //           {quienesSomos.map((faq, index) => (
  //             <div
  //               className="border-b border-slate-200 py-4 cursor-pointer w-[90%]"
  //               key={index}
  //               onClick={() => setOpenIndex(openIndex === index ? null : index)}
  //               aria-expanded={openIndex === index}
  //             >
  //               <div className="flex items-center justify-between">
  //                 <h3 className="text-base opacity-90">
  //                   <span className="text-[#D39231] opacity-100">
  //                     {faq.title[0]}
  //                   </span>
  //                   {faq.title.slice(1)}
  //                 </h3>
  //                 <svg
  //                   width="30"
  //                   height="30"
  //                   viewBox="0 0 18 18"
  //                   fill="none"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   className={`transition-transform duration-500 ease-in-out ${
  //                     openIndex === index ? "rotate-180" : ""
  //                   }`}
  //                   aria-hidden="true"
  //                 >
  //                   <path
  //                     d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
  //                     stroke="#D39231"
  //                     strokeWidth="1.5"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                   />
  //                 </svg>
  //               </div>
  //               <div
  //                 className={`overflow-hidden transition-all duration-500 ease-in-out ${
  //                   openIndex === index
  //                     ? "max-h-[800px] mt-2 opacity-100"
  //                     : "max-h-0 opacity-0"
  //                 }`}
  //               >
  //                 {faq.description.map((paragraph, idx) => (
  //                   <p key={idx} className="mb-4 text-sm text-gray-600">
  //                     {paragraph}
  //                   </p>
  //                 ))}
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default QuienesSomos;
