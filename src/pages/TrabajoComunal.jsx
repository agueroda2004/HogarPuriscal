import React, { useRef, useState } from "react";
import HeroForm from "../components/Forms/HeroForm";
import { imgUrl } from "../assets/assets.jsx";
import { motion } from "motion/react";
import TitleForm from "../components/Forms/TitleForm";
import InputName from "../components/Forms/InputText";
import BtnSubmit from "../components/Forms/BtnSubmit";
import Redes from "../components/Redes";
import InputCorreo from "../components/Forms/InputCorreo";
import InputText from "../components/Forms/InputText";
import InputTelefono from "../components/Forms/InputTelefono";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

function TrabajoComunal() {
  const service = import.meta.env.VITE_SERVICE_ID;
  const template = import.meta.env.VITE_TEMPLATE_ID_VOLUNTARIADO;
  const user = import.meta.env.VITE_USER_ID;

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    institucion: "",
    mensaje: "",
    idea: "trabajo comunal",
  });

  const refs = {
    nombre: useRef(null),
    email: useRef(null),
    telefono: useRef(null),
    asunto: useRef(null),
    mensaje: useRef(null),
    institucion: useRef(null),
  };

  const validarCorreo = (correo) => {
    return /^[A-Za-z0-9._%+-]+@gmail\.com$/i.test(correo);
  };

  const validarTelefono = (telefono) => {
    return /^[0-9]{4}-[0-9]{4}$/.test(telefono);
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
      institucion: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorElemento;

    errorElemento = refs[name].current.querySelector(".error-label");

    // Validar nombre
    name === "nombre" && validarVacio(errorElemento, name, value);
    // Validar asunto
    name === "asunto" && validarVacio(errorElemento, name, value);
    // Validar mensaje
    name === "mensaje" && validarVacio(errorElemento, name, value);
    name === "institucion" && validarVacio(errorElemento, name, value);

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
      if (key !== "idea") {
        const errorElemento = refs[key]?.current.querySelector(".error-label");

        if (formData[key].trim() === "") {
          mostrarError(errorElemento, key, "vacío");
          hayError = true;
        } else {
          ocultarError(errorElemento);
        }
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
      <div className="min-h-screen flex flex-row md:py-0">
        <HeroForm img={imgUrl.TrabajoComunal} />

        <div className="min-h-screen w-full lg:w-1/2 flex flex-col justify-center items-center lg:px-0 px-1 py-20">
          {/*  */}
          <motion.form
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className=" w-full flex flex-col gap-10 px-10 lg:max-w-[65%] rounded-[10px] border-gray-200  items-center md:max-w-[90%]"
            onSubmit={handleSubmit}
          >
            <TitleForm title={"Trabajo comunal"} />
            <InputText
              name={"nombre"}
              formData={formData.nombre}
              handleChange={handleChange}
              ref={refs.nombre}
            />
            <InputText
              name={"email"}
              formData={formData.email}
              handleChange={handleChange}
              ref={refs.email}
            />
            <InputTelefono
              formData={formData.telefono}
              handleChange={handleChange}
              ref={refs.telefono}
            />
            <InputText
              name={"institucion"}
              formData={formData.institucion}
              handleChange={handleChange}
              ref={refs.institucion}
            />
            <InputText
              name={"asunto"}
              formData={formData.asunto}
              handleChange={handleChange}
              ref={refs.asunto}
            />
            <InputText
              name={"mensaje"}
              formData={formData.mensaje}
              handleChange={handleChange}
              ref={refs.mensaje}
            />
            <div className="flex flex-row max-h-[40px] max-w-[500px] w-full gap-5">
              <BtnSubmit isLoading={isLoading} />
              <div className="w-full flex flex-row justify-end gap-2">
                <Redes />
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  );
}

export default TrabajoComunal;
