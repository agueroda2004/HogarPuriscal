import React from "react";
import { donaciones, donacionMonetaria } from "../assets/assets";
import { motion } from "motion/react";

export default function Donaciones() {
  return (
    <>
      <div className="h-20 w-full"></div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="min-h-screen flex flex-col justify-center items-center gap-10 mt-20 mb-20 w-full md:flex-row md:flex-wrap lg:flex-col"
      >
        <div
          className="justify-start items-center gap-10 hover:-translate-y-[2px] transition-all duration-300 opacity-80 flex flex-col pb-10 pt-5 px-5 rounded-[10px] w-70 h-100 lg:w-11/12 lg:flex-row lg:h-50 lg:rounded-bl-[100px] lg:rounded-tl-[100px] lg:rounded-br-[100px] lg:rounded-tr-[30px] lg:items-center lg:pb-0 lg:pt-0 xl:w-8/12 2xl:w-9/12"
          style={{ backgroundColor: donacionMonetaria.color }}
        >
          <div className="size-35 p-6 rounded-full bg-white flex justify-center items-center">
            {donacionMonetaria.svg}
          </div>
          <div className="text-white gap-3 flex flex-col text-center lg:text-start">
            <p className="lg:text-2xl font-bold">{donacionMonetaria.title}</p>
            <p className="">{donacionMonetaria.text}</p>
            <p className="text-[0.8rem] lg:text-base">
              {donacionMonetaria.account1}
            </p>
            <p className="text-[0.8rem] lg:text-base">
              {donacionMonetaria.account2}
            </p>
          </div>
        </div>
        {donaciones.map((dona, index) => (
          <div
            index={index}
            className="justify-start items-center gap-10 hover:-translate-y-[2px] transition-all duration-300 opacity-80 flex flex-col pb-10 pt-5 px-5 rounded-[10px] w-70 h-100 lg:w-11/12 lg:flex-row lg:h-50 lg:rounded-bl-[100px] lg:rounded-tl-[100px] lg:rounded-br-[100px] lg:rounded-tr-[30px] lg:items-center lg:pb-0 lg:pt-0 xl:w-8/12 2xl:w-9/12"
            style={{ backgroundColor: dona.color }}
          >
            <div className="size-35 p-6 rounded-full bg-white flex justify-center items-center">
              {dona.svg}
            </div>
            <div className="text-white gap-3 flex flex-col text-center lg:text-start lg:w-1/2">
              <p className="lg:text-2xl font-bold">{dona.title}</p>
              <p className="text-[0.8rem] lg:text-base">{dona.text}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}
