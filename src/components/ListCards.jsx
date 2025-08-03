import React from "react";
import { forwardRef } from "react";
import { InfoCards } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ListCards = forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <section
      ref={ref}
      className="w-full flex flex-col gap-5 justify-center items-center pt-30"
    >
      {InfoCards.map((card, index) => (
        <div
          className="shadow rounded-2xl flex flex-col md:flex-row mx-5  overflow-hidden md:max-w-[900px]"
          key={index}
        >
          <img
            src={card.image}
            alt={card.alt}
            className="w-full md:w-[250px] h-[250px] object-cover ml-2 rounded-2xl"
          />

          <div className="flex flex-col flex-1 py-5 px-5">
            <p className="text-2xl">
              <span className="text-[#D39231]">{card.title[0]}</span>
              {card.title.slice(1)}
            </p>

            <p className="text-sm py-2">{card.description}</p>

            <div className="w-full flex justify-end mt-auto">
              <button
                onClick={() => navigate("/working")}
                className="bg-[#D39231] text-white w-[150px] p-3 rounded-[10px] mt-3 flex flex-row gap-2 opacity-90 justify-center hover-effect hover:opacity-100"
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
});

export default ListCards;
