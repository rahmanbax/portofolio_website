import React from "react";
import dribble from "../assets/dribble.png"
import linkedin from "../assets/linkedin.png"
import gmail from "../assets/gmail.png"

const Footer = () => {
  return (
    <div className="relative">
      {/* content */}
      <div className="absolute flex flex-row items-center left-0 right-0 mx-auto z-10 mt-16 w-[1040px] justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-[24px] text-white">Get in touch</p>
          <p className="text-base text-[#e4e4db]">
            For bussiness inquiry please send email to{" "}
            <span >
              <a className="text-white underline" href="#">basyirahman@gmail.com</a>
            </span>
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <img src={gmail} alt="" Gmail />
          <img src={linkedin} alt="" LinkedIn />
          <img src={dribble} alt="" Dribble />
        </div>
      </div>
      {/* background */}
      <div className="top-0 w-full h-[186px] bg-[#65664F] z-0"></div>
    </div>
  );
};

export default Footer;
