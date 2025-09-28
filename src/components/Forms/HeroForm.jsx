import React from "react";
import { motion } from "motion/react";

const HeroForm = ({ img }) => {
  return (
    <div className="hidden lg:block w-1/2 relative min-h-screen">
      <img
        src={img}
        alt=""
        className="w-full min-h-screen overflow-hidden object-cover blur-[3px] absolute inset-0 h-full"
      />
      <div className="w-full h-full bg-black absolute opacity-30"></div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full min-h-screen flex justify-center items-center"
      >
        <h1
          className="text-white opacity-90 font-medium text-5xl
                 "
        >
          <span className="text-[#D39231] ">H</span>ogar para <br />
          adultos mayores <br />
          corazón de <br />
          Jesús
        </h1>
      </motion.div>
    </div>
  );
};

export default HeroForm;
