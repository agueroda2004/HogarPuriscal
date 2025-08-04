import React from "react";
import { imgUrl, quienesSomos } from "../assets/assets";

const QuienesSomos = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "How to use this component?",
      answer:
        "To use this component, you need to import it in your project and use it in your JSX code. Here's an example of how to use it:",
    },
    {
      question: "Are there any other components available?",
      answer:
        "Yes, there are many other components available in this library. You can find them in the 'Components' section of the website.",
    },
    {
      question: "Are components responsive?",
      answer:
        "Yes, all components are responsive and can be used on different screen sizes.",
    },
    {
      question: "Can I customize the components?",
      answer:
        "Yes, you can customize the components by passing props to them. You can find more information about customizing components in the 'Customization' section of the website.",
    },
  ];
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center pt-[120px]">
        <div className="shadow-md rounded-2xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] overflow-hidden mx-auto">
          {/* Título */}
          <div className="w-full h-[130px] overflow-hidden relative">
            <div className="w-full h-full bg-black opacity-55 absolute z-0"></div>
            <img
              src={imgUrl.QuienesSomos}
              alt=""
              className="w-full h-full object-cover object-center absolute blur-[2px] z-[-1]"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white opacity-95 absolute w-full text-center h-full my-10 z-10">
              <span className="text-[#D39231] opacity-100">Q</span>uienes somos
            </h1>
          </div>

          {/* Información */}
          <div className="flex flex-col w-full items-center mt-5 mb-10">
            {quienesSomos.map((faq, index) => (
              <div
                className="border-b border-slate-200 py-4 cursor-pointer w-[90%]"
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base opacity-90">
                    <span className="text-[#D39231] opacity-100">
                      {faq.title[0]}
                    </span>
                    {faq.title.slice(1)}
                  </h3>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-500 ease-in-out ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#D39231"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-[800px] mt-2 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.description.map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-sm text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuienesSomos;
