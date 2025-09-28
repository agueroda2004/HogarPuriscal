import React, { forwardRef } from "react";

const InputTelefono = forwardRef(({ formData, handleChange }, ref) => {
  return (
    <>
      <div
        ref={ref}
        className="border relative border-gray-300 rounded-[5px] h-[40px] pt-2 max-w-[500px] w-full flex flex-row justify-center items-center"
      >
        <label className="absolute -top-2.5 left-5 text-[0.8rem] opacity-70 bg-white">
          Teléfono
        </label>
        <label className="error-label hidden absolute -top-2.5 left-25 text-[0.8rem] opacity-70 bg-white text-red-500">
          Campo vacio
        </label>
        <span className="text-[0.8rem] text-black/60 ml-5">+506</span>
        <input
          autoComplete="off"
          maxLength={9}
          type="text"
          name="telefono"
          value={formData}
          onChange={handleChange}
          placeholder="Ingrese su teléfono"
          className="w-full outline-none text-[0.8rem] pl-2 text-base"
        />
      </div>
    </>
  );
});

export default InputTelefono;
