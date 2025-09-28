import React from "react";
import BtnVolver from "../BtnVolver";

const TitleForm = ({ title }) => {
  return (
    <>
      <div className="flex flex-row max-w-[500px] justify-between w-full items-center">
        <h1 className="lg:text-5xl font-extralight text-black/70 text-3xl">
          <span className="text-amber-500">{title[0]}</span>
          {title.slice(1)}
        </h1>
        <BtnVolver />
      </div>
    </>
  );
};

export default TitleForm;
