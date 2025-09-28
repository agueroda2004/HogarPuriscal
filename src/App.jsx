import { useRef } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Developing from "./components/Developing";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import Servicios from "./pages/Servicios";
import Voluntariado from "./pages/Voluntariado";
import { Toaster } from "react-hot-toast";
import Requisitos from "./pages/Requisitos";
import Donaciones from "./pages/Donaciones";
import JuntaDirectiva from "./pages/JuntaDirectiva";
import TrabajoComunal from "./pages/TrabajoComunal";

function App() {
  const hogarRef = useRef(null);
  const preguntasRef = useRef(null);
  const donacionesRef = useRef(null);
  const heroRef = useRef(null);

  const serviciosRefs = {
    fisioterapiaRef: useRef(null),
    enfermeriaRef: useRef(null),
    nutricionRef: useRef(null),
    gereatriaRef: useRef(null),
  };

  return (
    <>
      <Navbar
        hogarRef={hogarRef}
        preguntasRef={preguntasRef}
        donacionesRef={donacionesRef}
        heroRef={heroRef}
        serviciosRefs={serviciosRefs}
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
        <Route path="/voluntariado" element={<Voluntariado />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/requisitos" element={<Requisitos />} />
        <Route path="/donaciones" element={<Donaciones />} />
        <Route path="/junta-directiva" element={<JuntaDirectiva />} />
        <Route path="/trabajo-comunal" element={<TrabajoComunal />} />
        <Route
          path="/servicios"
          element={<Servicios serviciosRefs={serviciosRefs} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
