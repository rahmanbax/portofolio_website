import React from "react";
import gmail from "../assets/gmail.png";
import dribble from "../assets/dribble.png";
import linkedin from "../assets/linkedin.png";
// import {gmail, dribble, linkedin} from "../assets"

const Hero = () => {
  return (
      <div className="relative">
        {/* // content */}
        <div className="absolute left-0 right-0 mx-auto items-center w-[390px] lg:w-[1040px] z-10 mt-16 lg:mt-32 ">
          <div className="flex flex-col text-white ">
            <h2 className="text-center font-bold text-[39px] lg:text-[61px]">
              HI! I AM ANJAYANI
            </h2>
            <p className="text-center text-base lg:text-[25px] pt-2">
              UI/UX Designer based in Bandung, Indonesia. I design beautiful,
              clean and user friendly interfaces
            </p>
          </div>
          <div className="flex flex-row place-content-center mt-6 gap-2">
            <button className="flex flex-row items-center rounded-full px-8 py-4 bg-white font-medium w-13 text-base h-[52px] lg:h-[57px] gap-2 hover:bg-[#E6E6E6] transition ease-out">
              <img className="w-[20px] lg:w-[24px]" src={gmail} />
              <p className="text-basae lg:text-[20px]">Contact Me</p>
            </button>
            <button className="flex rounded-full w-13 lg:w-14 p-4 justify-center items-center bg-white hover:bg-[#E6E6E6] transition ease-out">
              <img className="w-[20px] lg:w-[24px]" src={dribble} />
            </button>
            <button className="flex rounded-full w-13 lg:w-14 p-4 justify-center items-center bg-white hover:bg-[#E6E6E6] transition ease-out">
              <img className="w-[20px] lg:w-[24px]" src={linkedin} />
            </button>
          </div>
        </div>
        {/* // background */}
        <div className="top-0 w-full h-[452px] bg-[#216869] z-0"></div>
      </div>
  );
};

export default Hero;
