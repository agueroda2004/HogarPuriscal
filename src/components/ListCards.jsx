import React from "react";
import { forwardRef } from "react";
import {
  InfoCards,
  SeccionDonaciones,
  SeccionHogar,
  SeccionPreguntas,
} from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ListCards = forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col gap-30 mt-30 mb-30">
      {/* Hogar */}
      <div className="flex justify-center items-center flex-row relative px-6">
        {/* Imagen */}
        <img
          src={SeccionHogar.image}
          alt=""
          className="min-h-[570px] max-w-[300px] object-cover blur-[1.5px] z-0"
        />

        {/* Espaciador */}
        <div className="h-[550px] w-[300px] md:w-[500px]"></div>

        {/* Fondo con opacidad */}
        <div
          className={`h-[550px] w-[300px] sm:w-[500px] rounded-[10px] absolute right-10 z-10`}
          style={{ backgroundColor: `#${SeccionHogar.color}`, opacity: 0.8 }}
        ></div>

        {/* Contenido encima */}
        <div className="h-[550px] w-[300px] sm:w-[500px] absolute right-10 flex flex-col justify-center px-5 z-11">
          <h1 className="text-white text-6xl font-bold max-w-[20px] -translate-x-27 sm:-translate-x-0">
            {SeccionHogar.title}
          </h1>
          <p className="text-sm text-white mt-2 max-w-100 -translate-x-25 sm:-translate-x-0">
            {SeccionHogar.description}
          </p>
          <div className="flex flex-row w-full gap-5 mt-5 flex-wrap -translate-x-30 justify-center sm:-translate-x-0">
            {SeccionHogar.links.map((link, index) => (
              <button
                className={`bg-white text-[#${SeccionHogar.color}] h-10 rounded-[10px] px-5 flex flex-row justify-center items-center gap-2 flex-wrap hover:translate-x-1 transition-all duration-300 active:translate-y-[1px] cursor-pointer`}
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
      </div>

      {/* Preguntas */}
      <div className="flex justify-center items-center flex-row relative px-6">
        {/* Fondo con opacidad */}
        <div
          className={`h-[550px] w-[300px] sm:w-[500px] rounded-[10px] absolute left-10 z-10`}
          style={{
            backgroundColor: `#${SeccionPreguntas.color}`,
            opacity: 0.8,
          }}
        ></div>

        {/* Contenido encima */}
        <div className="absolute left-10 flex flex-col justify-center h-[550px] w-[300px] sm:w-[500px] px-5 z-11 items-center">
          <h1 className="text-white text-6xl font-bold translate-x-27 sm:-translate-x-0">
            {SeccionPreguntas.title}
          </h1>
          <p className="text-sm text-white mt-2 translate-x-35 sm:-translate-x-0">
            {SeccionPreguntas.description}
          </p>
          <div className="flex flex-row w-full max-w-[400px] gap-5 mt-5 flex-wrap translate-x-30 justify-center sm:-translate-x-0">
            {SeccionPreguntas.links.map((link, index) => (
              <button
                className={`bg-white text-[#${SeccionPreguntas.color}] h-10 rounded-[10px] px-5 flex flex-row justify-center items-center gap-2 hover:translate-x-1 transition-all duration-300 active:translate-y-[1px] cursor-pointer`}
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

        {/* Espaciador */}
        <div className={`h-[550px] w-[300px] md:w-[500px] `}></div>

        {/* Imagen */}
        <img
          src={SeccionPreguntas.image}
          alt=""
          className="min-h-[570px] max-w-[300px] object-cover blur-[1.5px] rounded-[10px] "
        />
      </div>

      {/* Donaciones */}
      <div className="flex justify-center items-center flex-row relative px-6">
        {/* Imagen */}
        <img
          src={SeccionDonaciones.image}
          alt=""
          className="min-h-[570px] max-w-[300px] object-cover blur-[1.5px] z-0 rounded-[10px]"
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
        <div className="h-[550px] w-[300px] sm:w-[500px] absolute right-10 flex flex-col justify-center px-5 z-11">
          <h1 className="text-white text-5xl font-bold max-w-[20px] -translate-x-35 sm:-translate-x-0 sm:text-6xl">
            {SeccionDonaciones.title}
          </h1>
          <p className="text-sm text-white mt-2 max-w-100 -translate-x-25 sm:-translate-x-0">
            {SeccionDonaciones.description}
          </p>
          <div className="flex flex-row w-full gap-5 mt-5 flex-wrap -translate-x-30 justify-center sm:-translate-x-0">
            {SeccionDonaciones.links.map((link, index) => (
              <button
                className={`bg-white text-[#${SeccionDonaciones.color}] h-10 rounded-[10px] px-5 flex flex-row justify-center items-center gap-2 flex-wrap hover:translate-x-1 transition-all duration-300 active:translate-y-[1px] cursor-pointer`}
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
      </div>
    </div>
    // <div className="w-full flex justify-center items-center mb-20">
    //   <section
    //     ref={ref}
    //     className="md:w-[70%] flex flex-row gap-5 justify-center items-center pt-30 flex-wrap"
    //   >
    //     {InfoCards.map((card, index) => (
    //       <div
    //         className="p-4 bg-white rounded-lg shadow text-sm max-w-80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    //         key={index}
    //       >
    //         <img
    //           className="rounded-md max-h-40 w-full object-cover"
    //           src={card.image}
    //           alt={card.alt}
    //         />
    //         <p className="text-gray-700 text-xl font-semibold ml-2 mt-2">
    //           <span className="text-[#D39231]">{card.title[0]}</span>
    //           {card.title.slice(1)}
    //         </p>
    //         <p className="text-gray-500 mt-3 ml-2 h-[70px]">
    //           {card.description}
    //         </p>
    //         <button
    //           type="button"
    //           className="bg-[#D39231] mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-white hover-effect hover:bg-[#dea249] transition-all duration-200"
    //         >
    //           Ver más
    //         </button>
    //       </div>
    //       // <div
    //       //   className="shadow rounded-2xl flex flex-col md:flex-row mx-5  overflow-hidden md:max-w-[900px]"
    //       //   key={index}
    //       // >
    //       //   <img
    //       //     src={card.image}
    //       //     alt={card.alt}
    //       //     className="w-full md:w-[250px] h-[250px] object-cover ml-2 rounded-2xl"
    //       //   />

    //       //   <div className="flex flex-col flex-1 py-5 px-5">
    //       //     <p className="text-2xl">
    //       //       <span className="text-[#D39231]">{card.title[0]}</span>
    //       //       {card.title.slice(1)}
    //       //     </p>

    //       //     <p className="text-sm py-2">{card.description}</p>

    //       //     <div className="w-full flex justify-end mt-auto">
    //       //       <button
    //       //         onClick={() => navigate("/working")}
    //       //         className="bg-[#D39231] text-white w-[150px] p-3 rounded-[10px] mt-3 flex flex-row gap-2 opacity-90 justify-center hover-effect hover:opacity-100"
    //       //       >
    //       //         Ver más
    //       //       </button>
    //       //     </div>
    //       //   </div>
    //       // </div>
    //     ))}
    //   </section>
    // </div>
  );
});

export default ListCards;
