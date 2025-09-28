import React from "react";
import { motion } from "motion/react";

const CardServiciosRight = ({ data }) => {
  return (
    <div>
      <section
        ref={data.ref}
        className="flex justify-center items-center flex-row relative bordermax-w-full md:min-h-screen md:pt-10"
      >
        {/* Espaciador */}
        <div className="h-[550px] w-[300px] md:w-[500px]"></div>

        {/* Fondo con opacidad */}
        <div
          className={`h-[550px] w-[300px] sm:w-[500px] rounded-[10px] absolute left-10 z-10`}
          style={{
            backgroundColor: `#${data.color}`,
            opacity: 0.8,
          }}
        ></div>

        {/* Contenido encima */}
        <div className="h-[550px] w-[200px] sm:w-[500px] absolute -left-10 flex flex-col justify-center px-5 z-11 sm:left-15">
          <h1 className="text-white text-4xl font-bold max-w-[20px] translate-x-35 sm:-translate-x-0 sm:text-6xl">
            {data.title}
          </h1>
          <p className="text-[0.6rem] text-white mt-2 max-w-100 translate-x-35 sm:-translate-x-0 md:text-sm">
            {data.description}
          </p>
        </div>
        {/* Imagen */}
        <motion.img
          initial={{ x: 100, opacity: 0 }} // parte desde la izquierda
          whileInView={{ x: 0, opacity: 1 }} // cuando entra en viewport
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }} // solo se ejecuta la primera vez
          src={data.img}
          alt=""
          className="min-h-[570px] max-w-[300px] object-cover blur-[1.5px] z-0 rounded-[5px]"
        />
      </section>
    </div>
  );
};

export default CardServiciosRight;
