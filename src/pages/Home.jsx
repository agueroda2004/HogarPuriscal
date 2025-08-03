import React, { useRef } from "react";
import Hero from "../components/Hero";
import ListCards from "../components/ListCards";

const Home = () => {
  const infoRef = useRef(null);
  return (
    <div className="w-full">
      <Hero infoRef={infoRef} />
      <ListCards ref={infoRef} />
    </div>
  );
};

export default Home;
