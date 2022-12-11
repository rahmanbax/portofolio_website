import React from "react";
import buildupc from "../assets/buildupc.png"

const Card = ({title}) => {
  return (
    <div className="flex flex-col min-w-[504px] max-w-[504px] h-[399px] resize-none overflow-hidden rounded-2xl">
      <img src={buildupc} className="" />
      <div className="flex flex-row justify-between py-4 px-6 items-center w-full bg-white h-[63px]">
        <p className="font-bold text-[25px]">{title}</p>
        <p className="text-[20px]"><a href="#portofolio">View Full</a></p>
      </div>
    </div>
  );
};

export default Card;
