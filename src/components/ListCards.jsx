import React from "react";
import { forwardRef } from "react";
import { InfoCards } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ListCards = forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center items-center mb-20">
      <section
        ref={ref}
        className="md:w-[70%] flex flex-row gap-5 justify-center items-center pt-30 flex-wrap"
      >
        {InfoCards.map((card, index) => (
          <div
            className="p-4 bg-white rounded-lg shadow text-sm max-w-80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            key={index}
          >
            <img
              className="rounded-md max-h-40 w-full object-cover"
              src={card.image}
              alt={card.alt}
            />
            <p className="text-gray-700 text-xl font-semibold ml-2 mt-2">
              <span className="text-[#D39231]">{card.title[0]}</span>
              {card.title.slice(1)}
            </p>
            <p className="text-gray-500 mt-3 ml-2 h-[70px]">
              {card.description}
            </p>
            <button
              type="button"
              className="bg-[#D39231] mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-white hover-effect hover:bg-[#dea249] transition-all duration-200"
            >
              Ver más
            </button>
          </div>
          // <div
          //   className="shadow rounded-2xl flex flex-col md:flex-row mx-5  overflow-hidden md:max-w-[900px]"
          //   key={index}
          // >
          //   <img
          //     src={card.image}
          //     alt={card.alt}
          //     className="w-full md:w-[250px] h-[250px] object-cover ml-2 rounded-2xl"
          //   />

          //   <div className="flex flex-col flex-1 py-5 px-5">
          //     <p className="text-2xl">
          //       <span className="text-[#D39231]">{card.title[0]}</span>
          //       {card.title.slice(1)}
          //     </p>

          //     <p className="text-sm py-2">{card.description}</p>

          //     <div className="w-full flex justify-end mt-auto">
          //       <button
          //         onClick={() => navigate("/working")}
          //         className="bg-[#D39231] text-white w-[150px] p-3 rounded-[10px] mt-3 flex flex-row gap-2 opacity-90 justify-center hover-effect hover:opacity-100"
          //       >
          //         Ver más
          //       </button>
          //     </div>
          //   </div>
          // </div>
        ))}
      </section>
    </div>
  );
});

export default ListCards;
