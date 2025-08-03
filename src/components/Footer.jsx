import React from "react";
import { assets, menuLinks } from "../assets/assets";

const Footer = () => {
  return (
    <div className="w-full border border-gray-300 mt-20 bg-[#FBFBFB] py-20">
      {/* Contacto */}
      <div className="text-sm text-[#4E4E4E] w-full">
        <div className="flex flex-col items-center">
          <p className="font-semibold">Contáctanos</p>
          <p>(506) 2416-6250</p>
          <p>hogarpam@hogarpuriscal.org</p>
          <div className="flex flex-row gap-2 mt-2">
            <img
              src={assets.FacebookIcon}
              alt="Facebook"
              className="hover-effect w-8"
            />
            <img
              src={assets.WhatsAppIcon}
              alt="WhatsApp"
              className="hover-effect w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
