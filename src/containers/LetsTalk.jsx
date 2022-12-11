import React from "react";
import gmail from "../assets/gmail.png";

const LetsTalk = () => {
  return (
    <div className="relative">
      {/* content */}
      <div className="absolute flex flex-col items-center left-0 right-0 mx-auto z-10 mt-32 w-[1040px]">
        <h2 className="font-bold text-[49px] text-white text-center mb-6">
          Dou you have an awesome project?
        </h2>
        <button className="flex items-center rounded-full px-8 py-4 bg-white font-medium text-[20px] h-[57px] gap-2">
          <img src={gmail} />
          Lets talk!
        </button>
      </div>
      {/* background */}
      <div className="top-0 w-full h-[398px] bg-[#848668] z-0"></div>
    </div>
  );
};

export default LetsTalk;
