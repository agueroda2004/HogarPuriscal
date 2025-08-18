import React, { useRef } from "react";
import { forwardRef } from "react";
import { motion } from "motion/react";
import {
  InfoCards,
  SeccionDonaciones,
  SeccionHogar,
  SeccionPreguntas,
} from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ListCards = forwardRef(({ hogarRef, preguntasRef, donacionesRef }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col gap-30 mt-30 mb-30 overflow-x-hidden md:gap-15">
      {/* Hogar */}
      <section
        ref={hogarRef}
        className="flex justify-center items-center flex-row relative bordermax-w-full md:min-h-screen md:pt-10"
      >
        {/* Imagen */}
        <motion.img
          initial={{ x: -100, opacity: 0 }} // parte desde la izquierda
          whileInView={{ x: 0, opacity: 1 }} // cuando entra en viewport
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }} // solo se ejecuta la primera vez
          src={SeccionHogar.image}
          alt=""
          className="min-h-[570px] max-w-[300px] object-cover blur-[1.5px] z-0 rounded-[5px]"
        />

        {/* Espaciador */}
        <div className="h-[550px] w-[300px] md:w-[500px]"></div>

        {/* Fondo con opacidad */}
        <div
          className={`h-[550px] w-[300px] sm:w-[500px] rounded-[10px] absolute right-10 z-10`}
          style={{
            backgroundColor: `#${SeccionHogar.color}`,
            opacity: 0.8,
          }}
        ></div>

        {/* Contenido encima */}
        <div className="h-[550px] w-[200px] sm:w-[500px] absolute right-10 flex flex-col justify-center z-11 md:right-5">
          <h1 className="text-white text-4xl font-bold max-w-[20px] -translate-x-20 sm:translate-x-0 sm:text-6xl">
            {SeccionHogar.title}
          </h1>
          <p className="text-[0.6rem] text-white mt-2 max-w-100 -translate-x-25 sm:-translate-x-3 px-4 md:text-sm">
            {SeccionHogar.description}
          </p>
          <div className="flex flex-row w-full gap-5 mt-5 flex-wrap -translate-x-20 justify-start sm:-translate-x-0">
            {SeccionHogar.links.map((link, index) => (
              <button
                className={`bg-white text-[#CABC92] h-10 rounded-[10px] px-5 flex flex-row justify-center items-center gap-2 flex-wrap hover:translate-x-1 transition-all duration-300 active:translate-y-[1px] cursor-pointer`}
                key={index}
              >
                {link.title}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas */}
      <section
        ref={preguntasRef}
        className="flex justify-center items-center flex-row relative bordermax-w-full md:min-h-screen md:pt-10"
      >
        {/* Espaciador */}
        <div className="h-[550px] w-[300px] md:w-[500px]"></div>

        {/* Fondo con opacidad */}
        <div
          className={`h-[550px] w-[300px] sm:w-[500px] rounded-[10px] absolute left-10 z-10`}
          style={{
            backgroundColor: `#${SeccionPreguntas.color}`,
            opacity: 0.8,
          }}
        ></div>

        {/* Contenido encima */}
        <div
          src={SeccionPreguntas.image}
          className="h-[550px] w-[200px] sm:w-[500px] absolute -left-10 flex flex-col justify-center px-5 z-11 sm:left-15"
        >
          <h1 className="text-white text-4xl font-bold max-w-[20px] translate-x-35 sm:-translate-x-0 sm:text-6xl">
            {SeccionPreguntas.title}
          </h1>
          <p className="text-[0.6rem] text-white mt-2 max-w-100 translate-x-35 sm:-translate-x-0 md:text-sm">
            {SeccionPreguntas.description}
          </p>
          <div className="flex flex-row max-w-[400px] gap-5 mt-5 flex-wrap translate-x-35 justify-start sm:-translate-x-0">
            {SeccionPreguntas.links.map((link, index) => (
              <button
                className={`bg-white text-[#AE2C17] h-10 rounded-[10px] px-5 flex flex-row justify-center items-center gap-2 flex-wrap hover:translate-x-1 transition-all duration-300 active:translate-y-[1px] cursor-pointer`}
                key={index}
              >
                {link.title}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
        {/* Imagen */}
        <motion.img
          initial={{ x: 100, opacity: 0 }} // parte desde la izquierda
          whileInView={{ x: 0, opacity: 1 }} // cuando entra en viewport
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }} // solo se ejecuta la primera vez
          src={SeccionPreguntas.image}
          alt=""
          className="min-h-[570px] max-w-[300px] object-cover blur-[1.5px] z-0 rounded-[5px]"
        />
      </section>

      {/* Donaciones */}
      <section
        ref={donacionesRef}
        className="flex justify-center items-center flex-row relative bordermax-w-full md:min-h-screen md:pt-10"
      >
        {/* Imagen */}
        <motion.img
          initial={{ x: -100, opacity: 0 }} // parte desde la izquierda
          whileInView={{ x: 0, opacity: 1 }} // cuando entra en viewport
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }} // solo se ejecuta la primera vez
          src={SeccionDonaciones.image}
          alt=""
          className="min-h-[570px] max-w-[300px] object-cover blur-[1.5px] z-0 rounded-[5px]"
        />

        {/* Espaciador */}
        <div className="h-[550px] w-[300px] md:w-[500px]"></div>

        {/* Fondo con opacidad */}
        <div
          className={`h-[550px] w-[300px] sm:w-[500px] rounded-[10px] absolute right-10 z-10`}
          style={{
            backgroundColor: `#${SeccionDonaciones.color}`,
            opacity: 0.8,
          }}
        ></div>

        {/* Contenido encima */}
        <div className="h-[550px] w-[200px] sm:w-[500px] absolute right-10 flex flex-col justify-center z-11 md:right-5">
          <h1 className="text-white text-4xl font-bold max-w-[20px] -translate-x-20 sm:translate-x-0 sm:text-6xl">
            {SeccionDonaciones.title}
          </h1>
          <p className="text-[0.6rem] text-white mt-2 max-w-100 -translate-x-25 sm:-translate-x-3 px-4 md:text-sm">
            {SeccionDonaciones.description}
          </p>
          <div className="flex flex-row w-full gap-5 mt-5 flex-wrap -translate-x-20 justify-start sm:-translate-x-0">
            {SeccionDonaciones.links.map((link, index) => (
              <button
                className={`bg-white text-[#DABE57] h-10 rounded-[10px] px-5 flex flex-row justify-center items-center gap-2 flex-wrap hover:translate-x-1 transition-all duration-300 active:translate-y-[1px] cursor-pointer`}
                key={index}
              >
                {link.title}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

export default ListCards;
