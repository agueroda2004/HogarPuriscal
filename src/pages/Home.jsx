import React, { useRef } from "react";
import Hero from "../components/Hero";
import ListCards from "../components/ListCards";

const Home = ({ hogarRef, preguntasRef, donacionesRef, heroRef }) => {
  return (
    <div className="w-full">
      <Hero ref={heroRef} />
      <ListCards
        hogarRef={hogarRef}
        preguntasRef={preguntasRef}
        donacionesRef={donacionesRef}
      />
    </div>
  );
};

export default Home;
