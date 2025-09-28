import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "motion/react";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MotionConfig viewport={{ once: true }}>
      <ScrollToTop />
      <App />
    </MotionConfig>
  </BrowserRouter>
);
