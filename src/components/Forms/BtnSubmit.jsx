import React from "react";

const BtnSubmit = ({ isLoading }) => {
  return (
    <>
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
    </>
  );
};

export default BtnSubmit;
