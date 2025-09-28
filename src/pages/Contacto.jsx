import React, { useRef, useState } from "react";
import { imgUrl } from "../assets/assets.jsx";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import Redes from "../components/Redes";
import BtnVolver from "../components/BtnVolver";
import { motion } from "motion/react";

const Contacto = () => {
  const service = import.meta.env.VITE_SERVICE_ID;
  const template = import.meta.env.VITE_TEMPLATE_ID_CONTACTO;
  const user = import.meta.env.VITE_USER_ID;

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const refs = {
    nombre: useRef(null),
    email: useRef(null),
    telefono: useRef(null),
    asunto: useRef(null),
    mensaje: useRef(null),
  };

  const validarTelefono = (telefono) => {
    return /^[0-9]{4}-[0-9]{4}$/.test(telefono);
  };

  const validarCorreo = (correo) => {
    return /^[A-Za-z0-9._%+-]+@gmail\.com$/i.test(correo);
  };

  const validarVacio = (ele, name, value) => {
    if (value.length === 0) {
      mostrarError(ele, name, "vacío");
      return true;
    } else {
      ocultarError(ele);
      return false;
    }
  };

  const mostrarError = (ele, name, mensaje) => {
    ele.classList.remove("hidden");
    ele.textContent = `${name[0].toUpperCase() + name.slice(1)} ${mensaje}`;
  };
  const ocultarError = (ele) => {
    ele.classList.add("hidden");
  };

  const limpiarForm = () => {
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
    });
  };
  const handleChange = (e) => {
    console.log(isLoading);
    const { name, value } = e.target;
    const errorElemento = document.querySelector(`.${name}`);

    // Validar nombre
    name === "nombre" && validarVacio(errorElemento, name, value);
    // Validar asunto
    name === "asunto" && validarVacio(errorElemento, name, value);
    // Validar mensaje
    name === "mensaje" && validarVacio(errorElemento, name, value);

    // Valida correo
    if (name === "email") {
      if (!validarVacio(errorElemento, name, value)) {
        if (!validarCorreo(value)) {
          mostrarError(errorElemento, name, "invalido");
        } else {
          ocultarError(errorElemento);
        }
      }
    }

    // Valida numero
    if (name === "telefono") {
      if (!validarVacio(errorElemento, name, value)) {
        if (!validarTelefono(value)) {
          mostrarError(errorElemento, name, "invalido");
        } else {
          ocultarError(errorElemento);
        }
      }
    }

    let nuevoValor = value;

    // Si es el campo teléfono, le damos formato
    if (name === "telefono") {
      // Solo números
      let numeros = value.replace(/\D/g, "");

      // Guion después de los primeros 4 dígitos
      if (numeros.length > 4) {
        numeros = numeros.slice(0, 4) + "-" + numeros.slice(4, 8);
      }
      nuevoValor = numeros;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: nuevoValor,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let hayError = false;

    for (const key in formData) {
      const errorElemento = document.querySelector(`.${key}`);

      if (formData[key].trim() === "") {
        mostrarError(errorElemento, key, "vacío");
        hayError = true;
      } else {
        ocultarError(errorElemento);
      }
    }

    if (hayError) return setIsLoading(false);

    emailjs.send(service, template, formData, user).then(
      () => {
        setIsLoading(false);
        limpiarForm();
        toast.success("Consulta enviada", {
          style: { borderBottom: "3px solid #00B700" },
        });
      },
      () => {
        setIsLoading(false);
        toast.error("Error al enviar el correo", {
          style: { borderBottom: "3px solid red" },
        });
      }
    );
  };

  return (
    <>
      <div className="h-20  w-full"></div>
      <div className="flex flex-row md:py-0">
        {/* Imagen */}
        <div className="hidden lg:block w-1/2 min-h-screen relative">
          <img
            src={imgUrl.HeroImagen}
            alt=""
            className="w-full min-h-screen overflow-hidden object-cover blur-[3px] absolute"
          />
          <div className="w-full min-h-screen bg-black absolute opacity-30"></div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full min-h-screen flex justify-center items-center"
          >
            <h1
              className="text-white opacity-90 font-medium text-5xl
                 "
            >
              <span className="text-[#D39231] ">H</span>ogar para <br />
              adultos mayores <br />
              corazón de <br />
              Jesús
            </h1>
          </motion.div>
        </div>

        {/* Form */}
        <div className="min-h-screen w-full lg:w-1/2 flex flex-col justify-center items-center lg:px-0 px-1">
          <motion.form
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className=" w-full flex flex-col gap-10 px-10 lg:max-w-[65%] rounded-[10px] border-gray-200  items-center md:max-w-[90%]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-row max-w-[500px] justify-between w-full items-center">
              <h1 className="lg:text-5xl font-extralight text-black/70 text-3xl">
                <span className="text-amber-500">C</span>ontacto
              </h1>
              <BtnVolver />
            </div>

            {/* Nombre */}
            <div className="border relative border-gray-300 rounded-[5px] h-[40px] pt-2 max-w-[500px] w-full">
              <label className="absolute -top-2.5 left-5 text-[0.8rem] opacity-70 bg-white">
                Nombre
              </label>
              <label className="nombre hidden absolute -top-2.5 left-20 text-[0.8rem] opacity-70 bg-white text-red-500">
                Campo vacio
              </label>
              <input
                ref={refs.nombre}
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                type="text"
                placeholder="Introduce tu nombre"
                className="w-full pl-5 outline-none text-[0.8rem] text-base"
              />
            </div>
            {/* Correo */}
            <div className="border relative border-gray-300 rounded-[5px] h-[40px] pt-2 max-w-[500px] w-full">
              <label className="absolute -top-2.5 left-5 text-[0.8rem] opacity-70 bg-white">
                Correo
              </label>
              <label className="email hidden absolute -top-2.5 left-20 text-[0.8rem] opacity-70 bg-white text-red-500">
                Campo vacio
              </label>
              <input
                ref={refs.email}
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="text"
                placeholder="Introduce tu correo electronico"
                className="w-full pl-5 outline-none text-[0.8rem] text-base"
              />
            </div>

            {/* Telefono */}
            <div className="border relative border-gray-300 rounded-[5px] h-[40px] pt-2 max-w-[500px] w-full flex flex-row justify-center items-center">
              <label className="absolute -top-2.5 left-5 text-[0.8rem] opacity-70 bg-white">
                Teléfono
              </label>
              <label className="telefono hidden absolute -top-2.5 left-20 text-[0.8rem] opacity-70 bg-white text-red-500">
                Campo vacio
              </label>
              <span className="text-[0.8rem] text-black/60 ml-5">+506</span>
              <input
                autoComplete="off"
                maxLength={9}
                ref={refs.telefono}
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ingrese su teléfono"
                className="w-full outline-none text-[0.8rem] pl-2 text-base"
              />
            </div>

            {/* Asunto */}
            <div className="border relative border-gray-300 rounded-[5px] h-[40px] pt-2 max-w-[500px] w-full">
              <label className="absolute -top-2.5 left-5 text-[0.8rem] opacity-70 bg-white">
                Asunto
              </label>
              <label className="asunto hidden absolute -top-2.5 left-20 text-[0.8rem] opacity-70 bg-white text-red-500">
                Campo vacio
              </label>
              <input
                ref={refs.asunto}
                type="text"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                placeholder="Introduce el asunto"
                className="w-full pl-5 outline-none text-[0.8rem] text-base"
              />
            </div>
            {/* Mensaje */}
            <div className="border relative border-gray-300 rounded-[5px] pt-2 max-w-[500px] w-full">
              <label className="absolute -top-2.5 left-5 text-[0.8rem] opacity-70 bg-white">
                Mensaje
              </label>
              <label className="mensaje hidden absolute -top-2.5 left-20 text-[0.8rem] opacity-70 bg-white text-red-500">
                Campo vacio
              </label>
              <textarea
                usref={refs.mensaje}
                type="text"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Introduce el mensaje"
                className="w-full pl-5 outline-none text-[0.8rem] min-h-[100px] pt-2  resize-none text-base"
              />
            </div>
            {/* Enviar y redes sociales */}
            <div className="flex flex-row max-h-[40px] max-w-[500px] w-full gap-5">
              <button
                type="submit"
                className="bg-amber-500 rounded-[5px] text-white font-bold px-10 py-1 hover-effect hover:bg-amber-500/90 flex justify-center items-center gap-2 w-40 h-10"
              >
                {!isLoading ? (
                  "Enviar"
                ) : (
                  <svg
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    className="w-full h-full animate-spin"
                  >
                    <path
                      d="M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5"
                      stroke="#ffffff"
                    ></path>
                  </svg>
                )}
              </button>

              <div className="w-full flex flex-row justify-end gap-2">
                <Redes />
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default Contacto;
