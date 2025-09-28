import React from "react";
import FAQSeccion from "../components/FAQSeccion";
import { preguntasFrecuentes } from "../assets/assets.jsx";

const PreguntasFrecuentes = () => {
  return (
    <>
      <FAQSeccion seccion={preguntasFrecuentes} />
    </>
  );
};

export default PreguntasFrecuentes;
