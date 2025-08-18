import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Developing from "./components/Developing";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import { Toaster } from "react-hot-toast";

function App() {
  const hogarRef = useRef(null);
  const preguntasRef = useRef(null);
  const donacionesRef = useRef(null);
  const heroRef = useRef(null);

  return (
    <>
      <Navbar
        hogarRef={hogarRef}
        preguntasRef={preguntasRef}
        donacionesRef={donacionesRef}
        heroRef={heroRef}
      />
      <Routes>
        <Route
          path=""
          element={
            <Home
              hogarRef={hogarRef}
              preguntasRef={preguntasRef}
              donacionesRef={donacionesRef}
              heroRef={heroRef}
            />
          }
        />
        <Route path="/working" element={<Developing />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
