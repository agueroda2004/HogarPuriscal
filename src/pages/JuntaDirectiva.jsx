import React from "react";
import { motion } from "motion/react";
import { juntaDirectiva } from "../assets/assets";

export default function JuntaDirectiva() {
  return (
    <>
      <div className="w-full h-20"></div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="min-h-screen flex flex-col justify-center items-center gap-10 mt-20 mb-20 w-full md:flex-row md:flex-wrap lg:flex-col"
      >
        {juntaDirectiva.map((dona, index) => (
          <div
            index={index}
            className="justify-start items-center gap-10 hover:-translate-y-[2px] transition-all duration-300 opacity-80 flex flex-col pb-10 pt-5 px-5 rounded-[10px] w-70 h-100 lg:w-11/12 lg:flex-row lg:h-50 lg:rounded-bl-[100px] lg:rounded-tl-[100px] lg:rounded-br-[100px] lg:rounded-tr-[30px] lg:items-center lg:pb-0 lg:pt-0 xl:w-11/12 2xl:w-9/12 border-2"
            style={{ borderColor: dona.color }}
          >
            <div
              className="size-35 p-6 rounded-full bg-white flex justify-center items-center border-2"
              style={{ borderColor: dona.color }}
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: dona.color }}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"></path>{" "}
                  <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"></path>{" "}
                </g>
              </svg>
            </div>
            <div className="gap-3 flex flex-col text-center lg:text-start lg:w-1/2">
              <p
                className="lg:text-3xl font-bold"
                style={{ color: dona.color }}
              >
                {dona.title}
              </p>
              <p
                className="text-[0.8rem] lg:text-[1.2rem]"
                style={{ color: dona.color }}
              >
                {dona.name}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}
