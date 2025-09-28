import React, { forwardRef } from "react";

const InputText = forwardRef(
  ({ formData, handleChange, name, opcional }, ref) => {
    return (
      <>
        <div
          ref={ref}
          className={`border relative border-gray-300 rounded-[5px] ${
            name === "mensaje" ? "" : "h-[40px]"
          } pt-2 max-w-[500px] w-full`}
        >
          <label className="absolute -top-2.5 left-5 text-[0.8rem] opacity-70 bg-white">
            {name[0].toUpperCase() + name.slice(1)} {opcional}
          </label>
          <label className="error-label hidden absolute -top-2.5 left-25 text-[0.8rem] opacity-70 bg-white text-red-500">
            {/* Mensaje error */}
          </label>
          {name === "mensaje" ? (
            <textarea
              type="text"
              name={name}
              value={formData}
              onChange={handleChange}
              placeholder={`Introduce el ${name}`}
              className="w-full pl-5 outline-none text-[0.8rem] min-h-[100px] pt-2  resize-none text-base"
            />
          ) : (
            <input
              name={name}
              value={formData}
              onChange={handleChange}
              type="text"
              placeholder={`Introduce el ${name}`}
              className="w-full pl-5 outline-none text-[0.8rem] text-base"
            />
          )}
        </div>
      </>
    );
  }
);

export default InputText;
