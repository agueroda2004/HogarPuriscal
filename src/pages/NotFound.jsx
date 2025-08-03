import React from "react";
import { assets } from "../assets/assets";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFound = () => {
  return (
    <div className="w-full h-dvh flex justify-center items-center flex-col">
      <DotLottieReact
        src="https://lottie.host/d653a786-7103-41f9-97ef-efc8a253576b/6QXmIE44lu.lottie"
        loop
        autoplay
        className="h-50"
      />
    </div>
  );
};

export default NotFound;
