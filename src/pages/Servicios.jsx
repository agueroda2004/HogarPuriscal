import React, { useRef } from "react";
import { servicios } from "../assets/assets.jsx";
import CardServiciosLeft from "../components/CardServiciosLeft";
import CardServiciosRight from "../components/CardServiciosRight";

const Servicios = ({ serviciosRefs }) => {
  return (
    <>
      <div className="h-20  w-full"></div>
      <div className="min-h-screen w-full flex justify-center items-center flex-col gap-30 py-30 md:gap-15 md:py-0">
        {servicios.map((ser, index) =>
          ser.right ? (
            <CardServiciosRight
              data={{
                ...ser,
                ref: serviciosRefs[`${ser.title.toLowerCase()}Ref`],
              }}
              key={index}
            />
          ) : (
            <CardServiciosLeft
              data={{
                ...ser,
                ref: serviciosRefs[`${ser.title.toLowerCase()}Ref`],
              }}
              key={index}
            />
          )
        )}
      </div>
    </>
  );
};

export default Servicios;
