import React, { useRef, useState } from "react";
import { imgUrl } from "../assets/assets";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Contacto = () => {
  const service = import.meta.env.VITE_SERVICE_ID;
  const template = import.meta.env.VITE_TEMPLATE_ID;
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
          <div className="w-full min-h-screen flex justify-center items-center">
            <h1
              className="text-white opacity-90 font-medium text-5xl
                 "
            >
              <span className="text-[#D39231] ">H</span>ogar para <br />
              adultos mayores <br />
              corazón de <br />
              Jesús
            </h1>
          </div>
        </div>

        {/* Form */}
        <div className="min-h-screen w-full lg:w-1/2 flex flex-col justify-center items-center lg:px-0 px-1">
          <form
            className=" w-full flex flex-col gap-10 px-10 lg:max-w-[65%] rounded-[10px] border-gray-200  items-center md:max-w-[90%]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-row max-w-[500px] justify-between w-full items-center">
              <h1 className="lg:text-5xl font-light text-black/70 text-3xl">
                <span className="font-normal text-amber-500">C</span>ontacto
              </h1>
              <button
                type="button"
                className="flex items-center gap-1 py-2 text-black/60 text-[0.8rem] cursor-pointer hover:translate-x-2 transition-all duration-300 active:translate-y-[1px]"
                onClick={() => navigate("/")}
              >
                Volver
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
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
                <svg
                  className="w-[30px] h-[30px] text-amber-500 hover-effect hover:fill-amber-500/90"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17,0C8.7,0,2,6.7,2,15c0,3.4,1.1,6.6,3.2,9.2l-2.1,6.4c-0.1,0.4,0,0.8,0.3,1.1C3.5,31.9,3.8,32,4,32c0.1,0,0.3,0,0.4-0.1 l6.9-3.1C13.1,29.6,15,30,17,30c8.3,0,15-6.7,15-15S25.3,0,17,0z M25.7,20.5c-0.4,1.2-1.9,2.2-3.2,2.4C22.2,23,21.9,23,21.5,23 c-0.8,0-2-0.2-4.1-1.1c-2.4-1-4.8-3.1-6.7-5.8L10.7,16C10.1,15.1,9,13.4,9,11.6c0-2.2,1.1-3.3,1.5-3.8c0.5-0.5,1.2-0.8,2-0.8 c0.2,0,0.3,0,0.5,0c0.7,0,1.2,0.2,1.7,1.2l0.4,0.8c0.3,0.8,0.7,1.7,0.8,1.8c0.3,0.6,0.3,1.1,0,1.6c-0.1,0.3-0.3,0.5-0.5,0.7 c-0.1,0.2-0.2,0.3-0.3,0.3c-0.1,0.1-0.1,0.1-0.2,0.2c0.3,0.5,0.9,1.4,1.7,2.1c1.2,1.1,2.1,1.4,2.6,1.6l0,0c0.2-0.2,0.4-0.6,0.7-0.9 l0.1-0.2c0.5-0.7,1.3-0.9,2.1-0.6c0.4,0.2,2.6,1.2,2.6,1.2l0.2,0.1c0.3,0.2,0.7,0.3,0.9,0.7C26.2,18.5,25.9,19.8,25.7,20.5z" />
                </svg>
                <svg
                  className="w-[30px] h-[30px] text-amber-500 hover-effect hover:fill-amber-500/90"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h7V20h-4c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1h4v-3c0-3.3,1.7-6,5-6h4c0.6,0,1,0.4,1,1v3 c0,0.6-0.4,1-1,1h-3.8c-0.1,0-0.2,0.1-0.2,0.2V15h5c0.3,0,0.6,0.2,0.8,0.4s0.2,0.6,0.1,0.9l-2,3C24.8,19.8,24.4,20,24,20h-3v12h2 c5,0,9-4,9-9V9C32,4,28,0,23,0z" />
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacto;
