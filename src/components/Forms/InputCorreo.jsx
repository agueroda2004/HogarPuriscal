import React, { forwardRef } from "react";

const InputCorreo = forwardRef(({ formData, handleChange }, ref) => {
  return (
    <>
      <div
        ref={ref}
        className="border relative border-gray-300 rounded-[5px] h-[40px] pt-2 max-w-[500px] w-full"
      >
        <label className="absolute -top-2.5 left-5 text-[0.8rem] opacity-70 bg-white">
          Correo
        </label>
        <label className="error-label hidden absolute -top-2.5 left-25 text-[0.8rem] opacity-70 bg-white text-red-500">
          {/* Mensaje error */}
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="text"
          placeholder="Introduce tu correo electronico"
          className="w-full pl-5 outline-none text-[0.8rem] text-base"
        />
      </div>
    </>
  );
});

export default InputCorreo;
