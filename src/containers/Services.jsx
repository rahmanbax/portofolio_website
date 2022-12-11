import React from "react";
import Card2 from "../components/Card2";
import website from '../assets/website.svg'
import mobile from '../assets/mobile.svg'
import code from '../assets/code.svg'

const Services = () => {
  return (
    <div className="relative">
      {/* content */}
      <div className="absolute left-0 right-0 mx-auto items-center z-10 mt-32 w-[1040px]">
        <h2 className="font-bold text-[49px] text-center mb-16">
          Services i provide
        </h2>
        <div className="flex flex-wrap gap-8">
          <Card2 title="Website design" img={website} />
          <Card2 title="UI/UX Design" img={mobile} />
          <Card2 title="Design to code" img={code} />
        </div>
      </div>
      {/* background */}
      <div className="top-0 w-full h-[563px] bg-[#F0F3BD] z-0"></div>
    </div>
  );
};

export default Services;
